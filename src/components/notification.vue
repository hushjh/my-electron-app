<script setup>
const NOTIFICATION_TITLE = 'Title'
const NOTIFICATION_BODY =
  'Notification from the Renderer process. Click to log to console.'
const CLICK_MESSAGE = 'Notification clicked'

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY }).onclick =
  () => console.log(CLICK_MESSAGE)
</script>
<template>
  <p>After launching this application, you should see the system notification.</p>
  <p id="output">Click it to see the effect in this interface.</p>
</template>
<style scoped>

</style>