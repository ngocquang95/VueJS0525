<script setup>
import { ref } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Đây là tiêu đề modal'
  },
  isModalOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['close'])
</script>

<template>


  <Transition name="fade-zoom">
    <div v-if="isModalOpen" class="modal-backdrop" @click="handleCloseModal">
      <div class="modal-card" @click.stop>
        <div class="modal-header">
          <h2 class="modal-title">{{ title }}</h2>
          <button class="btn-close" @click="$emit('close')">&times;</button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
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

/* Modal backdrop: làm mờ nền + căn giữa modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

/* Modal card: khung chính */
.modal-card {
  background: white;
  border-radius: 1rem;
  width: 90%;
  max-width: 480px;
  padding: 1.75rem 2rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.3s ease;
  display: flex;
  flex-direction: column;
}

/* Modal Header: tiêu đề + nút đóng */
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
}

/* Nút đóng */
.btn-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #64748b;
  cursor: pointer;
  transition: color 0.2s;
}

.btn-close:hover {
  color: #334155;
}

/* Modal Body */
.modal-body {
  margin-top: 1rem;
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
}

/* Transition cho modal */
.fade-zoom-enter-active,
.fade-zoom-leave-active {
  transition: all 0.3s ease;
}

.fade-zoom-enter-from,
.fade-zoom-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Keyframe cho popup */
@keyframes fadeIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>