<template>
    <div>
        <h1>This is Home Page</h1>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const name = route.query.name;
const age = route.query.age;
console.log(name, age);
</script>

<style scoped>
</style>