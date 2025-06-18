<script setup>
import { ref } from 'vue'

const counter = ref(0)

function increment() {
    counter.value++
}

function decrement() {
    counter.value--
}
</script>

<template>
    <div>
        <h1>{{ counter }}</h1>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<style scoped></style>