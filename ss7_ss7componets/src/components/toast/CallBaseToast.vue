<script setup>
import { ref } from 'vue';
import BaseToast from './BaseToast.vue';

const isToastOpen = ref(false);
const toastConfig = ref({
  message: '',
  type: 'success',
  duration: 3000
});

const showToast = (messageParam, typeParam = 'success') => {
  toastConfig.value.message = messageParam;
  toastConfig.value.type = typeParam;

  isToastOpen.value = true;
}

const onToastClose = () => isToastOpen.value = false;

</script>

<template>
  <button class="btn-gradient" @click="showToast('Hello World')">Show Toast</button>
  <BaseToast v-if="isToastOpen" v-bind="toastConfig" @close="onToastClose" />
</template>

<style scoped>
/* Gradient Button */
.btn-gradient {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(to right, #6366f1, #3b82f6);
  color: white;
  border: none;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-gradient:hover {
  opacity: 0.9;
}
</style>