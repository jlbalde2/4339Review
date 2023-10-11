<script setup>
import { RouterLink, RouterView } from 'vue-router'

import userForm from './views/userForm.vue';
</script>

<template>
  <div class="conatiner">
    <nav class="nav nav-tabs">
  <RouterLink class="nav-link" to="/form">Form</RouterLink>
  <RouterLink class="nav-link" to="/charts">Charts</RouterLink>
  <RouterLink class="nav-link" to="/api">API</RouterLink>
 
    </nav>
    </div>
  <header>
  
  </header>
  <RouterView /> 

</template>

<style scoped>



</style>
