import { ref } from 'vue';

export const decimalValue = ref('');
export const binaryValue = ref('');

// binary to decimal

 export function binaryToDecimal(binary) {
   let decimal = 0;
   for (let i = 0; i < binary.length; i++) {
     const digit = parseInt(binary[binary.length - 1 - i]);
     decimal += digit * Math.pow(2, i);
   }
   return decimal;
 }

 export function restrictBinaryInput(event) {
   const input = event.target.value;
   const onlyBinary = input.replace(/[^01]/g, '');
   binaryValue.value = onlyBinary;
 }
 
 export function convertBinaryToDecimal() {
   let binary = binaryValue.value;
   binary = binary.replace(/[^01]/g, '');
   binaryValue.value = binary;
   const decimal = binaryToDecimal(binary);
   decimalValue.value = decimal.toString();
 }

// decimal to binary
 
export function addBinary(total) {
   let binaryTotal = "";
   while (total > 0) {
     let leftover = total % 2;
     binaryTotal = leftover + binaryTotal;
     total = Math.floor(total / 2);
   }
   return binaryTotal;
 }

export function convertDecimalToBinary() {
  const filteredValue = decimalValue.value.replace(/\D/g, '');
  decimalValue.value = filteredValue;
  const decimal = parseInt(filteredValue);
  if (!isNaN(decimal)) {
    binaryValue.value = addBinary(decimal);
  } else {
    binaryValue.value = 'Please input a binary number with less than 54 digits';
  }
}
