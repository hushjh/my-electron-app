<script setup>
import { ref, onMounted } from "vue";
const deviceName = ref(null);
async function testIt() {
  const device = await navigator.bluetooth.requestDevice({
    acceptAllDevices: true,
  });
  console.log("device1:", device);
  deviceName.value.innerHTML = device.name || `ID: ${device.id}`;
}

function cancelRequest() {
  window.electronAPI.cancelBluetoothRequest();
}

window.electronAPI.bluetoothPairingRequest((event, details) => {
  const response = {};

  switch (details.pairingKind) {
    case "confirm": {
      response.confirmed = window.confirm(
        `Do you want to connect to device ${details.deviceId}?`
      );
      break;
    }
    case "confirmPin": {
      response.confirmed = window.confirm(
        `Does the pin ${details.pin} match the pin displayed on device ${details.deviceId}?`
      );
      break;
    }
    case "providePin": {
      const pin = window.prompt(
        `Please provide a pin for ${details.deviceId}.`
      );
      if (pin) {
        response.pin = pin;
        response.confirmed = true;
      } else {
        response.confirmed = false;
      }
    }
  }

  window.electronAPI.bluetoothPairingResponse(response);
});
onMounted(() => {
  // document.getElementById('clickme').addEventListener('click', testIt)
})
</script>
<template>
  <h1>Web Bluetooth API</h1>

  <button id="clickme" @click="testIt">Test Bluetooth</button>
  <button id="cancel" @click="cancelRequest">Cancel Bluetooth Request</button>

  <p>
    Currently selected bluetooth device:
    <strong id="device-name" ref="deviceName"></strong>
  </p>
</template>

