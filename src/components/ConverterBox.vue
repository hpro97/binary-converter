
<script setup>
import { decimalValue, binaryValue, convertDecimalToBinary, convertBinaryToDecimal } from '../utils/converter';

</script>

<template>
  <form class="p-4 m-3 bg-dark text-white rounded-3">
 <div class="mb-3">
   <label for="decimal" class="form-label">Decimal Input</label>
   <input type="text" class="form-control" id="decimalInput" maxlength="16" placeholder="Please input a number below 16 digits"aria-describedby="decimalHelp" v-model="decimalValue" @input="convertDecimalToBinary">
   <div id="decimalHelp" class="form-text text-white">Input a whole decimal number here. I.E: 42, 760, 3958437, etc.</div>
 </div>
 <div class="mb-3">
   <label for="binary" class="form-label">Binary Output</label>
   <input type="text" class="form-control" id="binaryOutput" maxlength="54"placeholder="Please input a binary number with less than 54 digits" v-model="binaryValue" @input="convertBinaryToDecimal">
   <div id="BinaryHelp" class="form-text text-white">Input a binary number here. I.E: 1001, 1001101001, 1001010, etc.</div>
 </div>
</form>
</template>

<style scoped>
</style>