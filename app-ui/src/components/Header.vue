<template>
   <div class="header">{{ message }}</div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Headerc extends Vue {
  // Declared as component data
  message = 'Vue.js API Parallel Calls'
}
</script>