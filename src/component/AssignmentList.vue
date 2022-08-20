<script lang="ts">
import AssignmentObj from "@/dataObjects/AssignmentObj";
import { defineComponent } from "vue"
export default defineComponent({
    data: function(){
        return {
            mData: new AssignmentObj()
        }
    },
    props:["mInput"],
    created: function()
    {
        if (this.mInput != undefined)
        {
            this.mData = this.mInput;
        }
            
    }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
:root{
        --PHGold: #ffae34;
        --BestGrey: #232323;
        --SelectGrey:#565656;
        --SelectAniTime:0.5s;
    }
*{
    font-size: 2vw;
    color: var(--PHGold);
    font-family: 'Roboto', sans-serif;
}
.AssHolder{
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 7fr;
    margin: 15px 50px 15px 50px;
    justify-content: center;
    align-items: center;
    column-gap: 50px;
    border-bottom: 3px solid var(--PHGold);
    animation: forwards var(--SelectAniTime) OnLeave;
    border: 3px solid var(--PHGold);
}
.AssHolder:hover{
    animation: forwards var(--SelectAniTime) OnHover;
}
a{
    text-decoration: none;
    text-align: center;
}
@keyframes OnHover {
    0%{
        background-color: var(--BestGrey);
    }
    100%{
        background-color: var(--SelectGrey);
    }
}
@keyframes OnLeave {
    0%{
        background-color: var(--SelectGrey);
    }
    100%{
        background-color: var(--BestGrey);
    }
}
</style>

<template>
    <div class="AssHolder">
        <a href="">{{mData.Module}}</a>
        <p>{{mData.NormalizedDate}}</p>
        <p>{{mData.TimeLeft}}</p>
        <p>{{mData.Description}}</p>
    </div>
</template>