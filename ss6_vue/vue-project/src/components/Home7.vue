<script>
export default {
    data() {
        return {
            provinces: [],
        }
    },
    methods: {
        async getData() {
            const url = "https://provinces.open-api.vn/api/?depth=1";
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                this.provinces = await response.json();
            } catch (error) {
                console.error(error.message);
            }
        }
    },
    mounted() {
        this.getData();
    }
}
</script>

<template>
    <div>
        <ul>
            <li v-for="province in provinces" :key="province.code">
                {{ province.name }}
            </li>
        </ul>
    </div>
</template>

<style scoped></style>