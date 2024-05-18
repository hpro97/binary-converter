<script setup>
import { ref } from 'vue';
import { randomBinaryCode, refreshRandomBinaryCode } from '../utils/binaryGen.js';

</script>

<template>
   <!-- about binary left -->
   <div class="row justify-content-center pb-5">
   <div class="row justify-content-center" style="width: 100%; max-width: 73rem;">
      <div class="col-md-6 col-sm-12 d-flex justify-content-center mx-auto">
         <div class="card bg-dark text-white rounded-3 mb-5 pb-2">
            <div class="text-center">
               <img src="../../public/binary.jpg" class="card-img-top pt-3"
                  alt="man with holographic projection of binary code on face" style="width: 100%; max-width: 30rem;">
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
               <div>
                  <h2 class="card-title mb-3">About Binary</h2>
                  <p class="card-text mb-4">Binary, a cornerstone of computer science, employs a base-2 numeral system utilizing only two symbols, 0 and 1. Serving as the fundamental language of computing, it encapsulates data and commands in a format comprehensible to electronic devices. Binary's significance extends across various domains, from data storage and computation to communication, underpinning the intricate operations of computer systems and digital electronics, shaping the very fabric of modern technology and information processing.</p>
               </div>
               <div class="text-center mt-3">
                  <a href="https://en.wikipedia.org/wiki/Binary_number"  target="_blank" class="btn btn-outline-success">more about binary</a>
               </div>
            </div>
         </div>
      </div>

      <!-- instructions conversion right -->
      <div class="col-md-6 col-sm-12 d-flex justify-content-center mx-auto">
         <div class="card bg-dark text-white rounded-3 mb-5 pb-2">
            <div class="card-body d-flex flex-column justify-content-between">
               <div>
                  <h2 class="card-title mb-5">How to Convert to and from Binary</h2>
                  <div>
                     <h5 class="card-text mb-3">Decimal to Binary:</h5>
                     <p class="card-text mb-2">Divide the number by 2 and record the remainder. Continue dividing the
                        quotient
                        by 2 and recording the remainders until the quotient is 0. Read the remainders in reverse order
                        to get
                        the binary number.</p>
                     <p class="card-text mb-5">Example: 13 to binary is 1101.</p>
                     <h5 class="card-text mb-3">Binary to Decimal:</h5>
                     <p class="card-text mb-2">Write down the binary number. Assign powers of 2 to each digit from right
                        to
                        left. Multiply each binary digit by its corresponding power of 2 and sum the results to get the
                        decimal number.</p>
                     <p class="card-text mb-1">Example: 1101 to decimal is 13.</p>
                     <div class="text-center mt-5 binary-code-container">
                        <div class="binary-code"><code>{{ randomBinaryCode }}</code></div>
                     </div>
                     <div class="text-center">
                  <p class="btn btn-outline-success" @click="refreshRandomBinaryCode">Generate new binary number</p>
               </div>
                  </div>
               </div>
               <div class="text-center mt-3">
                  <a href="https://www.bbc.co.uk/bitesize/guides/zd88jty/revision/3" target="_blank" class="btn btn-outline-success">How to convert decimal to binary</a>
               </div>
            </div>
         </div>
      </div>
   </div>
   </div>   
</template>

<style scoped>
.binary-code-container {
  margin-right: 5rem;
  margin-left: 5rem;
  margin-top: 5rem;
  padding-top: 2.5rem;
  padding-bottom: 1rem;
  justify-content: center;
  align-items: center;
}
</style>

