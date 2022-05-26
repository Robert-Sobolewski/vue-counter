<template>
    <div>
        <CounterDisplay :value=currentValue />
        <Controls v-on:add="add" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CounterDisplay from './CounterDisplay.vue';
import Controls from './Controls.vue';

export default defineComponent({
    setup () {
        
        let currentValue = ref<Number>(0)
        const add =(value:string)=>{
        //   console.log('tofcurrent', value);
        currentValue.value += parseInt(value)
        }
        return {currentValue,add}
    },
    components: {
    CounterDisplay,
    Controls
}
})
</script>

<style scoped>

</style>