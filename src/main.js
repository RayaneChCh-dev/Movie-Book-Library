import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style.css'
const app = createApp(App)

app.config.globalProperties.$notify = function({ type, text }) {
  const notification = document.createElement('div')
  if (type === 'success') {
    notification.className = 'fixed bottom-5 right-5 bg-primary text-white px-5 py-3 rounded-md shadow-lg z-50 min-w-[250px] transform transition-all duration-300 ease-in-out opacity-0 translate-y-5'
  } else if (type === 'error') {
    notification.className = 'fixed bottom-5 right-5 bg-danger text-white px-5 py-3 rounded-md shadow-lg z-50 min-w-[250px] transform transition-all duration-300 ease-in-out opacity-0 translate-y-5'
  } else {
    notification.className = 'fixed bottom-5 right-5 bg-gray-800 text-white px-5 py-3 rounded-md shadow-lg z-50 min-w-[250px] transform transition-all duration-300 ease-in-out opacity-0 translate-y-5'
  }
  
  notification.innerText = text
  document.body.appendChild(notification)
  setTimeout(() => {
    notification.classList.remove('opacity-0', 'translate-y-5')
    notification.classList.add('opacity-100', 'translate-y-0')
  }, 10)
  setTimeout(() => {
    notification.classList.remove('opacity-100', 'translate-y-0')
    notification.classList.add('opacity-0', 'translate-y-5')
    
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

app.use(router)
app.use(store)
app.mount('#app')


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')