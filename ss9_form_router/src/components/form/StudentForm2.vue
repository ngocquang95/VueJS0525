<script setup>
import { ref } from 'vue';
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate';

defineRule('required', (value) => {
    if (!value) {
        return 'This field is required';
    }
    return true;
});

defineRule('score', (value) => {
    if (value < 0 || value > 100) {
        return 'Score must be between 0 and 100';
    }
    return true;
});

const student = ref({
    name: '',
    score: 0
});

const handleSubmit = () => {
    // Call API
    console.log(student.value);
}
</script>
<template>
    <div>
        <h1>Student Form</h1>
        <Form @submit="handleSubmit">
            <div>
                <label for="name">Name</label>
                <Field type="text" name="name" id="name" v-model="student.name" rules="required" />
                <ErrorMessage name="name" class="error" />
            </div>

            <div>
                <label for="score">Score</label>
                <Field type="number" name="score" id="score" v-model="student.score" rules="required|score" />
                <ErrorMessage name="score" class="error" />
            </div>
            <button type="submit">Submit</button>
        </Form>
    </div>
</template>


<style scoped>
.error {
    color: red;
}
</style>