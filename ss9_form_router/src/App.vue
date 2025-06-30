<script setup>
</script>

<template>
  <nav>
    <router-link to="/home?name=John&age=20">Home</router-link>
    <router-link to="/about/123">About</router-link>
    <router-link to="/student">Student</router-link>
  </nav>

  <div>
    <router-view />
  </div>
</template>

<style scoped></style>
