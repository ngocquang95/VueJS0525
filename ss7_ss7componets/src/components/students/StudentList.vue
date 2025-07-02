<script setup>
import { ref, onMounted } from 'vue';
import BaseModal from '../BaseModal.vue';
import StudentForm from './StudentForm.vue';
import StudentApi from '@/api-service/StudentApi';

const students = ref([])

const isModalCreationOpen = ref(false);

const handleOpenCreationModal = () => isModalCreationOpen.value = true;
const handleCloseCreationModal = () => isModalCreationOpen.value = false;

const handleSubmitCreation = (student) => {
    // students.value.push(student)
    fetchStudents()
    handleCloseCreationModal()
}



const fetchStudents = async () => {
    // Có 3 cách xử lý bất đồng bộ
    try {
        const res = await StudentApi.findAll()
        students.value = res.data
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    fetchStudents()
})

</script>

<template>
    <div>
        <h1>Danh sach hoc sinh</h1>
        <button class="btn-gradient" @click="handleOpenCreationModal">Them hoc sinh</button>
        <table class="table">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Ten</th>
                    <th>Tuoi</th>
                    <th>Hanh dong</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(student, index) in students" :key="student.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ student.name }}</td>
                    <td>{{ student.age }}</td>
                    <td>
                        <button class="btn-gradient">Sua</button>
                        <button class="btn-gradient">Xoa</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <BaseModal title="Them hoc sinh" :isModalOpen="isModalCreationOpen" @close="handleCloseCreationModal">
        <StudentForm @close="handleCloseCreationModal" @submit="handleSubmitCreation" />
    </BaseModal>
</template>



<style scoped>
.table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    overflow: hidden;
}

.table th,
.table td {
    padding: 0.75rem 1.25rem;
    border-bottom: 1px solid #e5e7eb;
    text-align: left;
}

.table th {
    background: linear-gradient(to right, #6366f1, #3b82f6);
    color: #fff;
    font-weight: 700;
    font-size: 1rem;
}

.table tr:last-child td {
    border-bottom: none;
}

.btn-gradient {
    padding: 0.5rem 1.25rem;
    background: linear-gradient(to right, #6366f1, #3b82f6);
    color: white;
    border: none;
    border-radius: 9999px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-right: 0.5rem;
    box-shadow: 0 2px 8px rgba(99, 102, 241, 0.08);
}

.btn-gradient:last-child {
    margin-right: 0;
}

.btn-gradient:hover {
    opacity: 0.9;
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
}

h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #3b82f6;
    letter-spacing: 1px;
    text-align: center;
}

div {
    padding: 2rem 0;
    max-width: 700px;
    margin: 0 auto;
}
</style>