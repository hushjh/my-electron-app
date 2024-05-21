<script setup>
import { ref } from 'vue'
import darkModeCom from './components/darkMode.vue'
import blueToothCom from './components/blueTooth.vue'
const message = ref('i am app.vue!!')

</script>

<template>
  <header>
    {{ message }}
  </header>
  <!-- <darkModeCom /> -->
  <blueToothCom />
</template>

<style scoped>
</style>
