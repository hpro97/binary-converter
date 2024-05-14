import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')

// js functionality for Binary

// function addBinary(a,b) {
//    let total = a + b;
//      let binaryTotal = "";
//    while (total > 0){
//      let leftover = total % 2;
//      binaryTotal = leftover + binaryTotal;
//      total = Math.floor(total/2);
//      }
//    // const binaryTotal = total.toString(2) ;
//    return binaryTotal;
//    }
