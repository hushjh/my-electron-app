<script setup>
import { ref } from 'vue'
import darkModeCom from './components/darkMode.vue'
import blueToothCom from './components/blueTooth.vue'
import menuCom from './components/menu.vue'
const message = ref('i am app.vue!!')

</script>

<template>
  <header>
    {{ message }}
  </header>
  <!-- <darkModeCom /> -->
  <!-- <blueToothCom /> -->
  <menuCom />
</template>

<style scoped>
</style>
