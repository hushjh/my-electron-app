<script setup>
import { ref } from 'vue'
const message = ref('i am app.vue')
</script>

<template>
  <header>
    {{ message }}
  </header>

</template>

<style scoped>
</style>
