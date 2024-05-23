<script setup>
import { ref } from 'vue'
import darkModeCom from './components/darkMode.vue'
import blueToothCom from './components/blueTooth.vue'
import menuCom from './components/menu.vue'
// import dragCom from './components/drag.vue'
import notificationCom from './components/notification.vue'
const message = ref('i am app.vue!!')

</script>

<template>
  <header>
    {{ message }}
  </header>
  <!-- <darkModeCom /> -->
  <!-- <blueToothCom /> -->
  <!-- <menuCom /> -->
  <!-- <dragCom /> -->
  <notificationCom />
</template>

<style scoped>
</style>
