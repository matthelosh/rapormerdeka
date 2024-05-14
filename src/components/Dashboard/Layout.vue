<script setup>
import { ref, computed, defineAsyncComponent } from 'vue'
import SideMenu from './SideMenu.vue'

const comp = ref('Home')

const is = computed(() => {
    return defineAsyncComponent(() => import('./'+comp.value+'.vue'))
})
</script>

<template>
    <div class="common-layout">
    <el-container>
      <el-aside width="15%" class="bg-sky-400 h-screen">
        <SideMenu />
      </el-aside>
      <el-container class="bg-sky-200">
        <el-header class="bg-sky-100">Header</el-header>
        <el-main class="h-full bg-pink-100">
            <el-scrollbar>
                <component :is="is" />
            </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>