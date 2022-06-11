<template>
    <div>
        <CounterDisplay :value="currentValue" />
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
        const add =(value:number)=>{
        currentValue.value = currentValue.value.valueOf() + value// = value;
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