<script setup>
import { ref } from 'vue'
const themeSource = ref(null)
const toggleDark = async () => {
  const isDarkMode = await window.darkMode.toggle()
  themeSource.value.innerHTML = isDarkMode ? 'Dark' : 'Light'
}
const reset = async () => {
  await window.darkMode.system()
  themeSource.value.innerHTML = 'System'
}
</script>

<template>
  <p id="theme-source" ref="themeSource"></p>
  <button @click="toggleDark">Toggle Dark Mode</button>
  <button @click="reset">Reset to System theme</button>
</template>

<style scoped>
</style>
