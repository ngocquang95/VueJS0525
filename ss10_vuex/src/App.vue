<script setup>
import Counter from './components/Counter.vue'
import { useStore } from 'vuex'

const store = useStore()

</script>

<template>
  <div>
    <p>App: {{ store.state.count }}</p>
    <h1>Vuex</h1>
    <Counter />
  </div>
</template>

<style scoped>

</style>
