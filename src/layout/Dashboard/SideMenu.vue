<script setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'

const emit = defineEmits(['showComponent'])
const menus = ref([
    {
        label: 'Data Utama',
        items: [
            {
                icon: 'home',
                label: 'Dashboard',
                url: '/'
            },
            {
                icon: 'city',
                label: 'Data Sekolah',
                url: '/sekolah'
            },
            {
                icon: 'google-classroom',
                label: 'Data Rombel',
                url: '#'
            },
            {
                icon: 'account-tie',
                label: 'Data Guru',
                url: '#'
            },
            {
                icon: 'human-child',
                label: 'Data Siswa',
                url: '#',
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
        
        <div >
            <div class="kategori" v-for="(category, c) in menus" :key="c">
                <h3 class="p-4 mt-2 bg-opacity-20 uppercase text-slate-500 tracking-wide font-bold bg-white">{{ category.label }}</h3>
                <div class="grid grid-cols-1 gap-2 p-2">
                    <RouterLink v-for="(menu,m) in category.items" exact-active-class="text-red-500" active-class="text-yellow-500" :key="m" :to="menu.url" class="flex items-center text-white gap-1">
                        <Icon :icon="`mdi:${menu.icon}`" />
                        {{ menu.label }}
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>