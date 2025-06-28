<script setup>
import { ref } from 'vue';
import RealTimeClock from './RealTimeClock.vue';

const showClock = ref(true);

</script>

<template>
    <div>
        <button @click="showClock = !showClock">
            {{ showClock ? 'Ẩn đồng hồ' : 'Hiển thị đồng hồ' }}
        </button>
        <RealTimeClock v-if="showClock"/>
    </div>
</template>

