<script setup>
// import { ref, computed, defineASyncComponent} from 'vue'

import axios from 'axios'
import { defineAsyncComponent, ref } from 'vue';
import { Icon } from '@iconify/vue'

const auth = ref(true)
const Dashboard = defineAsyncComponent(() => import('./components/Dashboard/Layout.vue'))
const Login = defineAsyncComponent(() => import('./components/Login.vue'))
</script>

<template>
  <div>
    <Login v-if="!auth" />
    <Dashboard v-else />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
