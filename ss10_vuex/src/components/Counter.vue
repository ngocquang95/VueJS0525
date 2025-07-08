<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const count = computed(() => store.getters.count)
const countDouble = computed(() => store.getters.countDouble)
const increment = async () => {
    console.log('Trước khi commit', count.value) // 0
    await store.dispatch('increment')
    console.log('Sau khi commit', count.value) // 1
}
</script>

<template>
    <div>
        <h1>Counter</h1>
        <p>Counter: {{ count }}</p>
        <p>Count Double: {{ countDouble }}</p>
        <button @click="increment">Increment</button>
    </div>
</template>

<style scoped>
</style>