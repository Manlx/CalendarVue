<script lang="ts">
    interface returnType{
        CTime:ClassTimeDisplay,
    }

    import { ClassTimeDisplay } from '@/dataObjects/ClassTimeObj';
    import { defineComponent } from 'vue';
    export default defineComponent({
        data:function(){
            let temp:returnType = {
                CTime: new ClassTimeDisplay("","",new Date(),"")
            };

            return temp;
        },
        props:["mInput"],
        created:function(){
            this.CTime = this.mInput;
        }
    })
</script>
<style>
    :root{
        --PHGold: #ffae34;
        --Margin: 10px;
        --Padding: 5px;
    }
    .ClassHolder{
        display: flex;
        justify-content: space-around;
        border: 3px solid var(--PHGold);
        margin: var(--Margin);
        padding: var(--Padding);
    }
</style>

<template>
<div class="ClassHolder">
    <a href="">{{CTime.ModuleName}}</a>
    <p>{{CTime.Delivery}}</p>
    <p>{{CTime.Time}}</p>
    <p>{{CTime.FormattedDate}}</p>
</div>
</template>