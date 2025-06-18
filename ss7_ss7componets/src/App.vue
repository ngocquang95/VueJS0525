<script setup>
import Greeting from './components/Greeting.vue'
import CallComponent from './components/CallComponent.vue'
import Greeting3 from './components/Greeting3.vue'
import BaseModal from './components/BaseModal.vue'
import CallBaseModal from './components/CallBaseModal.vue'
import StudentList from './components/students/StudentList.vue'
import CallBaseToast from './components/toast/CallBaseToast.vue'
</script>

<template>
  <!-- <Greeting name="John" /> <br>
  <Greeting name="Nguyen Van B" address="456 Main St" /> -->
  <!-- <CallBaseModal /> -->
  <StudentList />
  <CallBaseToast />
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
