<script>
export default {
    data() {
        return {
            countriesInSoutheastAsia: [
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
            ],
            score: 0,
            isShowAnswer: true
        }
    }
}
</script>

<template>
    <div>
        <p v-if="isShowAnswer">Day la bai test</p>
        <button @click="isShowAnswer = !isShowAnswer">Show Answer</button>
        <h1>Score: {{ score }}</h1>
        <input type="text" v-model="score" />
        <ul>
            <li v-for="country in countriesInSoutheastAsia" :key="country">
                {{ country }}
            </li>
        </ul>
    </div>
</template>

<style scoped></style>