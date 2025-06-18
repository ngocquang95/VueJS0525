<script>
export default {
    props: {
        name: {
            type: String,
            default: 'Unknown'
        },
        address: {
            type: String,
            default: 'Da Nang'
        }
    },
    data() {
        return {
        }
    }
}
</script>

<template>
    <h1>Hello {{ name }} - {{ address }}</h1>
</template>

<style scoped></style>