<script setup>
import { ref } from 'vue';

const student = ref({
    name: '',
    age: 0,
})

const emit = defineEmits(['close', 'submit'])

const submit = () => {
    emit('submit', {...student.value, id: Math.floor(Math.random() * 1000)})
}


</script>

<template>
    <div class="form-container">
        <input class="input-modern" type="text" placeholder="Nhap ten hoc sinh" v-model="student.name" />
        <input class="input-modern" type="text" placeholder="Nhap tuoi hoc sinh" v-model="student.age" />
        <div class="btn-group">
            <button class="btn-gradient" @click="$emit('close')">Huy</button>
            <button class="btn-gradient" @click="submit">Xac nhan</button>
        </div>
    </div>
</template>


<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 1rem 0;
}

.input-modern {
    padding: 0.75rem 1.25rem;
    border: 1px solid #e5e7eb;
    border-radius: 9999px;
    font-size: 1rem;
    outline: none;
    transition: border 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 8px rgba(99,102,241,0.04);
}
.input-modern:focus {
    border: 1.5px solid #6366f1;
    box-shadow: 0 4px 16px rgba(99,102,241,0.12);
}

.btn-group {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
    justify-content: flex-end;
}
</style>