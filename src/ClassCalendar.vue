<script lang="ts">
import { defineComponent } from "vue";
import $ from 'jquery'
import type { Module } from "./dataObjects/ModuleObj";
import { ClassTimeDisplay, type ClassTime } from "./dataObjects/ClassTimeObj";
import type { DataObj } from "./dataObjects/DataObj";
import ClassScheduleItems from "./component/ClassScheduleItems.vue";

interface returnType
{
    Classes:ClassTimeDisplay[]
}
function CalculateDates(DateStart:Date,DateEnd:Date):Date[]
{
    const WeekValue:number = 24*60*60*1000*7;
    let Dates:Date[] = [];
    let CurrentDate:Date = DateStart;
    while (CurrentDate.valueOf() < DateEnd.valueOf())
    {
        Dates.push(CurrentDate)
        CurrentDate = new Date(CurrentDate.valueOf()+WeekValue);
    }
    return Dates;
}
export default defineComponent({
    data: function () {
        let temp: returnType = {
            Classes: []
        };
        return temp;
    },
    created: function () {
        let TempExtern = this;
        const limit = 14;
        $.getJSON(".\\src\\data\\Modules.json", function (data) {
            let ReturnTemp: ClassTimeDisplay[] = [];
            let temp: DataObj = (data as DataObj);
            
            temp.Modules.forEach(function (a) {
                a.ClassTimes.forEach(function (b) {
                    let Dates: Date[] = CalculateDates(new Date(b.StartsOn), new Date(b.EndsOn));
                    Dates.forEach(function (c) {
                        ReturnTemp.push(new ClassTimeDisplay(b.Delivery, b.Time, c, a.ModuleName));
                    });
                });
            });
            //Sorts data
            ReturnTemp.sort(function(a,b){
                return a.Date.valueOf() - b.Date.valueOf()
            })
            //Removes Old Classes
            ReturnTemp = ReturnTemp.filter(function(a){
                return a.Date.valueOf() > (new Date()).valueOf();
            })
            //Limits Data;
            ReturnTemp.splice(limit,ReturnTemp.length);
            TempExtern.Classes = ReturnTemp;
        });
    },
    components: { ClassScheduleItems }
})
</script>

<template>
    <div class="ClassTitleHolder">
        <p>Module</p>
        <p>Delivery</p>
        <p>Time</p>
        <p>Date</p>
    </div>
    <ClassScheduleItems v-for="(item, index) in Classes" :key="index" :mInput="item"/>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    font-size: 3vw;
}
.ClassTitleHolder{
    display: flex;
    justify-content: space-around;
    font-size: 3vh;
}
</style>
