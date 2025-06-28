<script setup>
import { ref, watch } from 'vue';

const name = ref('');
const counter = ref(0);
watch(name, (newVal, oldVal) => {
    console.log(newVal, oldVal);
    counter.value++;
});
</script>

<template>
    <div>
        <h1>Watch Name</h1>
        <input v-model="name" placeholder="Enter your name" />
        <p>Name: {{ name }}</p>
        <p>Count: {{ counter }}</p>
    </div>
</template>

<style scoped></style>