<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increment() {
            this.counter++
        },
        decrement() {
            this.counter--
        }
    }
}
</script>

<template>
    <div>
        <h1>{{ counter }}</h1>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<style scoped>

</style>