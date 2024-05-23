<script setup>
const ondragstart = (event) => {
  event.preventDefault()
  window.electron.startDrag('drag-and-drop-1.md')
}
</script>
<template>
  <div draggable="true" id="drag" @dragstart="ondragstart">拖动我</div>
</template>
<style scoped>
#drag{
  border:2px solid black;
  border-radius:3px;
  padding:5px;
  display:inline-block;
}
</style>