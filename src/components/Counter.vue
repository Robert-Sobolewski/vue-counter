<template>
    <div>
        <CounterDisplay value="3" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CounterDisplay from './CounterDisplay.vue';

export default defineComponent({
    setup () {
        

        return {}
    },
    components: {
        CounterDisplay
    }
})
</script>

<style scoped>

</style>