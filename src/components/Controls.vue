
<template>
    <div class="controls">
        <button @click="$emit('add',1)">Add one</button>
        <button @click="$emit('add',-1)">Substract one</button>
        <button @click="fetchData(); $emit('add',rnd)">Add random async value: {{rnd}}</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
    setup () {
      let rnd = ref<number>(0)
      const fetchData = async()=>{
          await axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
          .then((response:any)=>{
              rnd.value = response.data
          })
          .catch((err:any) => console.error(err))
      }
        return {rnd, fetchData }
    }
})
</script>

<style scoped lang="scss">
    .controls {
        display: flex;
        justify-content: space-around;
        width: 50%;
        padding: 1em;

        button{
            padding: 0.2em;
            font-weight: bold;
        }
        }
</style>