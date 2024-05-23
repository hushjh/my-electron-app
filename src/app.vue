<script setup>
import { ref } from 'vue'
import darkModeCom from './components/darkMode.vue'
import blueToothCom from './components/blueTooth.vue'
import menuCom from './components/menu.vue'
import dragCom from './components/drag.vue'
const message = ref('i am app.vue!!')

</script>

<template>
  <header>
    {{ message }}
  </header>
  <!-- <darkModeCom /> -->
  <!-- <blueToothCom /> -->
  <!-- <menuCom /> -->
  <dragCom />
</template>

<style scoped>
</style>
