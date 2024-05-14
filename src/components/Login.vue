<script setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'

const user = ref({})
const loading = ref(false)
</script>

<template>
    <div class="w-screen h-screen flex items-center justify-center bg-sky-300">
        <div class="form w-[50%]">
            <img class="mx-auto w-32" src="../assets/img/tutwuri.png" />
            <h1 class="title text-center text-white text-2xl font-bold tracking-wider">Selamat Datang</h1>
            <h3 class="font-light text-center text-white">Rapor Kurikulum Merdeka SD</h3>
            <el-form v-model="user" label-position="top" class="border w-[350px] mx-auto mt-4 px-4 py-2 rounded bg-white bg-opacity-20">
                <el-form-item label="Username">
                    <el-input v-model="user.name" placeholder="Username"></el-input>
                </el-form-item>
                <el-form-item label="Password">
                    <el-input v-model="user.password" placeholder="Sandi"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary mx-auto" :loading="loading">
                        <Icon icon="mdi:lock-open" />
                        Login
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>