<template>
    <div>
        <h1>This is About Page</h1>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;
console.log(id);

</script>

<style scoped>
</style>