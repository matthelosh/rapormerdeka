<script setup>
import { ref, computed, defineAsyncComponent } from 'vue'
import SideMenu from './SideMenu.vue'

</script>

<template>
    <div class="common-layout">
    <el-container>
      <el-aside width="15%" class="bg-sky-400 h-screen">
        <SideMenu @show-component="changeComponent($event, komponen)" />
      </el-aside>
      <el-container class="bg-slate-200">
        <el-header class="bg-sky-100">
          <div class="w-full h-full flex items-center">
            <h3>Aplikasi Rapor</h3>
          </div>
        </el-header>
        <el-main class="h-full ">
            <el-scrollbar height="85vh">
                <RouterView />
            </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>