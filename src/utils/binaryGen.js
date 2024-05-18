import { ref } from 'vue';

export const randomBinaryCode = ref(generateRandomBinaryCode());

function generateRandomBinaryCode() {
  let code = '1';
  for (let i = 0; i < 15; i++) {
    code += Math.round(Math.random());
  }
  return code;
}

export function refreshRandomBinaryCode() {
  randomBinaryCode.value = generateRandomBinaryCode();
}