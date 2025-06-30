<script setup>
import { ref } from 'vue';

const student = ref({
    name: '',
    score: 0
});

const errors = ref({
    name: '',
    score: ''
});

const validate = () => {
    let isValid = true;
    if (student.value.name === '') {
        errors.value.name = 'Name is required';
        isValid = false;
    }
    if (student.value.score < 0 || student.value.score > 100) {
        errors.value.score = 'Score must be between 0 and 100';
        isValid = false;
    }

    return isValid;
}

const handleSubmit = () => {
    if (validate()) {
        // Call API
        console.log(student.value);
    }
}
</script>
<template>
    <div>
        <h1>Student Form</h1>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="name">Name</label>
                <input type="text" id="name" v-model="student.name" />
                <p v-if="errors.name" class="error">{{ errors.name }}</p>
            </div>

            <div>
                <label for="score">Score</label>
                <input type="number" id="score" v-model="student.score" />
                <p v-if="errors.score" class="error">{{ errors.score }}</p>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>


<style scoped>  
.error {
    color: red;
}
</style>