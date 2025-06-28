<script setup>
import { ref, onUnmounted, onMounted } from 'vue';

const currentTime = ref('');
let intervalId = null;

onMounted(() => {
    updateTime();
    intervalId = setInterval(() => {
        updateTime();
    }, 1000);
});

const updateTime = () => {
    currentTime.value = new Date().toLocaleTimeString();
};

onUnmounted(() => {
    clearInterval(intervalId);
});
</script>

<template>
    <div>
        <h1>Thời gian hiện tại</h1>
        <p>{{ currentTime }}</p>
    </div>
</template>

<style scoped></style>