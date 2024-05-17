import { createApp } from 'vue'
// import './style.css'
import './tailwind.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { router } from './routes/router.js'

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app').$nextTick(() => {
    // Use contextBridge
    window.ipcRenderer.on('main-process-message', (_event, message) => {
      console.log(message)
    })
})
