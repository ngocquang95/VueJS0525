<script setup>
import { useCounterStore } from '../stores/counter' 
import { computed } from 'vue'

const store = useCounterStore()
const count = computed(() => store.count)
const countDouble = computed(() => store.countDouble)
const increment = async () => {
    console.log('Trước khi commit', count.value) // 0
    await store.increment()
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