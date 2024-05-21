<script setup>
import { ref } from 'vue'
const lastkeypress = ref(null)

function handKeyPress(event) {
  lastkeypress.value.innerHTML = event.key
  console.log(`you pressed ${event.key}`)
}
window.addEventListener('keyup', handKeyPress, true)
</script>

<template>
  <p id="last-keypress" ref="lastkeypress"></p>
</template>

<style scoped>
</style>
