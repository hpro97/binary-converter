<script setup>
import { ref } from 'vue';
</script>

<template>
   <form class="p-4 m-3 bg-dark text-white rounded-3">
  <div class="mb-3">
    <label for="decimal" class="form-label">Decimal Input</label>
    <input type="number" class="form-control" id="decimalInput" aria-describedby="decimalHelp">
    <div id="decimalHelp" class="form-text text-white">Input a whole decimal number here. I.E: 42, 760, 3958437, etc.</div>
  </div>
  <div class="mb-3">
    <label for="binary" class="form-label">Binary Input</label>
    <input type="number" class="form-control" id="binaryInput" aria-describedby="binaryHelp">
    <div id="BinaryHelp" class="form-text text-white">Input a binary number here. I.E: 1, 1001, 11001101, etc.</div>
  </div>
</form>
</template>

<style scoped>
</style>