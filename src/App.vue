<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Counter />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Counter from './components/Counter.vue';

export default defineComponent({
  name: 'App',
  components: {
    Counter
}
});
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
