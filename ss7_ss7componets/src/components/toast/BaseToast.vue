<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'success',
    validator: (value) => ['success', 'error', 'warning', 'info'].includes(value)
  },
  duration: {
    type: Number,
    default: 3000
  }
});

const emit = defineEmits(['close']);
const isVisible = ref(true);

onMounted(() => {
  if (props.duration > 0) {
    setTimeout(() => {
      isVisible.value = false;
      emit('close');
    }, props.duration);
  }
});

const icons = {
  success: '✔️',
  error: '❌',
  warning: '⚠️',
  info: 'ℹ️'
};
</script>

<template>
  <Transition name="toast-fade">
    <div v-if="isVisible" :class="['toast', type]">
      <span class="icon">{{ icons[type] }}</span>
      <span class="message">{{ message }}</span>
      <button class="close" @click="$emit('close')">×</button>
    </div>
  </Transition>
</template>

<style scoped>
.toast {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 260px;
  max-width: 320px;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  line-height: 1.4;
}

/* Icons */
.icon {
  font-size: 1rem;
}

/* Close Button */
.close {
  margin-left: auto;
  background: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
}
.close:hover {
  opacity: 0.7;
}

/* Toast Types */
.success {
  background-color: #16a34a;
}
.error {
  background-color: #dc2626;
}
.warning {
  background-color: #d97706;
}
.info {
  background-color: #2563eb;
}

/* Animation */
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: all 0.3s ease;
}
.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>