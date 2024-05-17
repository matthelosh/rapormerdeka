import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../pages/Dashboard/Home.vue'
import Sekolah from '../pages/Dashboard/Sekolah.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/sekolah',
        component: Sekolah
    }
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes
})

// export default { router }