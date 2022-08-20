<script lang="ts">

import { defineComponent } from "vue"
import $ from 'jquery'
import { DataObj } from "./dataObjects/DataObj";
import Assignment from "./dataObjects/AssignmentObj";
import TestComp from "./component/TestComp.vue";
import AssignmentList from "./component/AssignmentList.vue";

interface returnData
{
    AllData:DataObj
    AllAssignments:Assignment[]
}

export default defineComponent({
    components: { TestComp, AssignmentList },
    data:function(){
        let temp: returnData= {
            AllData: new DataObj(),
            AllAssignments:[],
        };
        return temp;
    },
    created:function()
    {
        let temp:DataObj =new DataObj();
        let extTemp = this;
        //src\data\Modules.json
        $.getJSON(".\\src\\data\\Modules.json", function(data){
           temp = (data as DataObj);
           extTemp.AllData = temp;
           extTemp.AllData.Modules.forEach(function(e){
            
            e.Assignments.forEach(function(b){
                let temp = new Assignment(e.ModuleName,new Date(b.DueDate),b.Description)
                extTemp.AllAssignments.push(temp)
            })
           })
        })
    }
})
</script>

<style>
    :root{
        --PHGold: #ffae34;
    }
    *{
        margin: 0;
        padding: 0;
    }
    body{
        background-color: #232323;
        color: aliceblue;
    }
    .Title{
        text-align: center;
        font-size: 4vw;
        color: var(--PHGold);
    }
    .ItemHeaders{
        display: grid;
        grid-template-columns: 2fr 2fr 2fr 7fr;
        margin: 15px 50px 15px 50px;
        justify-content: center;
        align-items: center;
        column-gap: 50px;
        border-bottom: 3px solid var(--PHGold);
        animation: forwards var(--SelectAniTime) OnLeave;
        font-size:5vw;
    }
    .ItemHeader{
        font-size: 3vw;
    }
</style>

<template>
    <h1 class="Title">Assignments For BSc IT</h1>
    <div class="ItemHeaders">
        <p class="ItemHeader">Module</p>
        <p class="ItemHeader">Date</p>
        <p class="ItemHeader">Remaining</p>
        <p class="ItemHeader">Description</p>
    </div>
    <AssignmentList v-for="(item, index) in AllAssignments" :key="index" :mInput="item"/>
</template>