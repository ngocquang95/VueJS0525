<script setup>
import { ref } from 'vue';
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
    name: yup.string().required('Name is required'),
    score: yup.number()
        .transform(value => (isNaN(value) ? null : value))
        .required('Score is required')
        .min(0, 'Score must be greater than 0')
        .max(100, 'Score must be less than 100')
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
        <Form @submit="handleSubmit" :validation-schema="schema">
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