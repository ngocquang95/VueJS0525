<script setup>
import { ref } from 'vue'

const countriesInSoutheastAsia = ref([
    "Việt Nam",
    "Thái Lan",
    "Campuchia",
    "Lào",
    "Myanmar (Miến Điện)",
    "Malaysia",
    "Singapore",
    "Indonesia",
    "Philippines",
    "Đông Timor",
    "Brunei",
])
</script>

<template>
    <div>
        <ul>
            <li v-for="country in countriesInSoutheastAsia" :key="country">
                {{ country }}
            </li>
        </ul>
    </div>
</template>

<style scoped></style>