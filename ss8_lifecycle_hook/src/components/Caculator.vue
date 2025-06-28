<script setup>
import { ref, watchEffect, computed } from 'vue';

const numFirst = ref(0);
const numSecond = ref(1);
const add = computed(() => numFirst.value + numSecond.value);
const sub = ref(0);
const mul = ref(0);
const div = ref(0);

watchEffect(() => {
    sub.value = numFirst.value - numSecond.value;
    mul.value = numFirst.value * numSecond.value;
    div.value = numFirst.value / numSecond.value;
})

</script>

<template>
    <div>
        <h1>Caculator</h1>
        <input type="number" v-model.number="numFirst" placeholder="Enter first number" />
        <input type="number" v-model.number="numSecond" placeholder="Enter second number" />

        <p>Add: {{ add }}</p>
        <p>Sub: {{ sub }}</p>
        <p>Mul: {{ mul }}</p>
        <p>Div: {{ div }}</p>
    </div>
</template>

<style scoped></style>