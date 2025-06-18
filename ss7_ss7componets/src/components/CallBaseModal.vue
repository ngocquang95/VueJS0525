<script setup>
import BaseModal from './BaseModal.vue'
import { ref } from 'vue';

const isModalOpen = ref(false);

const handleOpenModal = () => isModalOpen.value = true;
const handleCloseModal = () => isModalOpen.value = false;
</script>

<template>
    <div>
        <button class="btn-gradient" @click="handleOpenModal">Mở Modal</button>
    </div>

    <BaseModal title="Them hoc sinh" :isModalOpen="isModalOpen" @close="handleCloseModal" @open="handleOpenModal">
        <div>
            <h1>Them hoc sinh</h1>
            <input type="text" placeholder="Nhap ten hoc sinh" />
            <input type="text" placeholder="Nhap tuoi hoc sinh" />
            <input type="text" placeholder="Nhap lop hoc sinh" />
            <button class="btn-gradient" @click="handleAddStudent">Them hoc sinh</button>
        </div>
    </BaseModal>
</template>



<style scoped></style>