<script setup>
import Header from "./components/Header.vue";
import HeroBanner from "./components/HeroBanner.vue";
import ConverterBox from "./components/ConverterBox.vue";
import AboutBinaryLeft from "./components/AboutBinary.vue";
import InstructionsBinaryRight from "./components/InstructionsBinaryRight.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
<Header />
<HeroBanner />
<ConverterBox />
<AboutBinaryLeft />
<InstructionsBinaryRight />
<Footer />
</template>

<style scoped>
</style>

<!-- call sections replacing content of template -->

<!-- to do:

   short:

rebuild banner with appropriate sizing
logo and links for nav
icons, logo and links in footer
card links for buttons in about binary

   mid:

routing with links for nav to home and contact

   long:
   
build contact page with contact form
correct binary and decimal js logic for large numbers

-->
