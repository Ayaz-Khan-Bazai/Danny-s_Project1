<script setup>
import navbar from './components/navbar.vue'
import footerend from './components/footerend.vue'
import demo  from './components/demo.vue'


import { ref, onMounted } from 'vue'



</script>

<template>


  <navbar />
  <RouterView />
  <footerend />
  <!-- <demo/> -->
  <!-- <div id="app">  {{ restaurants.data.title[0]. }}  </div> -->

</template>
