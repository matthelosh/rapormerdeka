<script setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
const menus = ref([
    {
        label: 'Data Utama',
        items: [
            {
                icon: 'home',
                label: 'Dashboard',
                component: 'Sekolah'
            },
            {
                icon: 'city',
                label: 'Data Sekolah',
                component: 'Home'
            },
            {
                icon: 'google-classroom',
                label: 'Data Rombel',
                component: 'Rombel'
            },
            {
                icon: 'account-tie',
                label: 'Data Guru',
                component: 'Guru'
            },
            {
                icon: 'human-child',
                label: 'Data Siswa',
                component: 'Siswa',
                separator: true
            },

        ]
    },
    {
        label: 'Penilaian',
        items: [

        ]
    },
    {
        label: 'Rapor',
        items: []
    },
    {
        label: 'Utilitas',
        items: []
    }
    
])
</script>

<template>
    <div>
        <h1 class="text-2xl bg-white font-bold text-white text-center bg-opacity-20 py-6 uppercase">Rapor SD</h1>
        
        <template
            v-for="(kategori, k) in menus" :key=k
        >
            <el-divider>{{ kategori.label }}</el-divider>
            <el-menu
                active-text-color="lime"
                text-color="white"
                background-color="transparent"
            >
            <template v-for="(menu,m) in kategori.items" :key="m">
                <el-menu-item
                    
                >
                    <Icon :icon="`mdi:${menu.icon}`" class="mr-1" />
                    <span>{{ menu.label }}</span>
                </el-menu-item>
            </template>
        </el-menu>
        </template>
        
    </div>
</template>