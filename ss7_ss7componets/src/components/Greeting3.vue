<script setup>
defineProps({
    name: {
        type: String,
        default: 'Unknown'
    },
    address: {
        type: String,
        default: 'Da Nang'
    }
})
</script>

<template>
    <h1>Hello {{ name }} - {{ address }}</h1>
</template>

<style scoped></style>