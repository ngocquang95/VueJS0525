<script setup>
import Home from './components/Home.vue'
import Home2 from './components/Home2.vue'
import Home3 from './components/Home3.vue'
import Home5 from './components/Home5.vue'
import Home7 from './components/Home7.vue'
</script>

<template>
  <!-- <Home /> -->
  <!-- <Home2 /> -->
  <!-- <Home3 /> -->
  <!-- <Home5 /> -->
  <Home7 />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
