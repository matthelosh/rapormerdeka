<script setup>
import {ref, computed, onMounted, defineAsyncComponent } from 'vue'
import axios from 'axios'
import { Icon } from '@iconify/vue'
import { ElNotification } from 'element-plus';

const FormSekolah = defineAsyncComponent(() => import('../../components/Dashboard/Sekolah/FormSekolah.vue'))
const ImporSekolah = defineAsyncComponent(() => import('../../components/Dashboard/Sekolah/ImporSekolah.vue'))
const sekolahs = ref([])
const resp = ref({})

const formSekolah = ref(false)
const imporSekolah = ref(false)

const url = ref('http://rapor-api.test/api/sekolah')
const init = async() => {
    axios.get(url.value)
            .then(res => {
                console.log(res)
                sekolahs.value = res.data.data.data
                resp.value = res.data.data
            })
            .catch(err => {
                console.log(err)
            })
}

const goto = async(pageLink) => {
    url.value = pageLink
    init()
}

const hapus = async(item) => {
    // axios.delete()
    ElNotification({title: `Info`, message: `${item.nama} dihapus`, type: 'success'})
}

onMounted(() => {
    init()
})
</script>

<template>
    <div>
        <el-affix :offset="60">
            <div class="toolbar w-full h-10 flex items-center justify-between p-2 shadow bg-slate-100">
                <h3>Data Sekolah</h3>
                <div class="toolbar-items flex  items-center pl-1">
                    <el-button @click="formSekolah = !formSekolah">
                        <Icon icon="mdi:plus-circle" />
                        <span class="ml-1">Baru</span>
                    </el-button>
                    <el-button @click="imporSekolah = !imporSekolah">
                        <Icon icon="mdi:file-excel" />
                        <span class="ml-1">Impor</span>
                    </el-button>
                </div>
            </div>
        </el-affix>
        <div class="w-full flex justify-end mt-2 gap-2">
            <el-button-group>
                <el-button v-for="(link,l) in resp.links" :key="l" :href="link.url" active-class="text-slate-500" :disabled="link.active" @click="goto(link.url)">
                    <span v-html="link.label"></span>
                </el-button>
            </el-button-group>
            <div class="search">
                <el-input placeholder="Cari Sekolah" ></el-input>
            </div>
        </div>
        <div class="mt-2 py-2">
            <el-table :data="sekolahs" class="w-full">
                <el-table-column label="NPSN" prop="npsn" />
                <el-table-column label="Nama" prop="nama" />
                <el-table-column label="Alamat" prop="alamat" />
                <el-table-column label="Desa" prop="desa" />
                <el-table-column label="Kepala Sekolah" prop="nama_ks" />
                <el-table-column align="right">
                    <template #default="scope">
                        <div class="flex items-center">
                            <el-button type="warning" size="small" @click="edit(scope.row)">Edit</el-button>
                            <el-popconfirm title="Yakin menghapus?" confirm-button-text="OK" cancel-button-text="Batal" @confirm="hapus(scope.row)">
                                <template #reference>
                                    <el-button type="danger" size="small">Hapus</el-button>
                                </template>
                            </el-popconfirm>
                            </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>

    <FormSekolah :open="formSekolah" @close="formSekolah = false" />
    <ImporSekolah :open="imporSekolah" @close="imporSekolah = false" />
</template>