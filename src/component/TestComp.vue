<script lang="ts">
import { defineComponent } from "vue";

    export default defineComponent({
        data:function(){
            return {
                ValueDisplay:""
            }
        },
        components:{},
        props:["mValue"],
        created:function(){
            this.ValueDisplay = this.mValue
        }
    })
</script>

<template>
    <h1>{{ValueDisplay}}</h1>
</template>

<style>
</style>