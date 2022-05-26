
<template>
    <div>
        <h1>{{value}}</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
     props:['value'],
    setup (props) {

        return{
        }
    }
})
</script>

<style scoped>

</style>