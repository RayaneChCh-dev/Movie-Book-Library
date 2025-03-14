<template>
  <div class="max-w-5xl mx-auto px-4">
    <div class="flex flex-col items-center mb-8">
      <h2 class="text-3xl font-bold text-dark bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Ajouter un élément</h2>
      <div class="h-1 w-20 bg-gradient-primary rounded-full mt-2"></div>
    </div>
    
    <div class="bg-white rounded-xl shadow-custom p-8 max-w-2xl mx-auto">
      <form @submit.prevent="submitForm" class="space-y-6">
        <div>
          <label for="title" class="block text-sm font-medium text-gray-700 mb-1">Titre</label>
          <div class="relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <input
              id="title"
              v-model="form.title"
              type="text"
              required
              placeholder="Titre du livre ou du film"
              class="pl-10 w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
        
        <div>
          <label for="creator" class="block text-sm font-medium text-gray-700 mb-1">Auteur / Réalisateur</label>
          <div class="relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <input
              id="creator"
              v-model="form.creator"
              type="text"
              required
              placeholder="Nom de l'auteur ou du réalisateur"
              class="pl-10 w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
        
        <div>
          <label for="year" class="block text-sm font-medium text-gray-700 mb-1">Année</label>
          <div class="relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <input
              id="year"
              v-model.number="form.year"
              type="number"
              min="1800"
              :max="currentYear"
              required
              placeholder="Année de publication/sortie"
              class="pl-10 w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
        
        <div class="flex items-center">
          <input
            id="consumed"
            v-model="form.consumed"
            type="checkbox"
            class="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded transition-colors"
          />
          <label for="consumed" class="ml-3 block text-sm font-medium text-gray-700">Déjà lu / vu</label>
        </div>
        
        <div class="flex gap-4 pt-4">
          <button 
            type="submit" 
            class="flex-1 inline-flex justify-center items-center px-6 py-3 rounded-lg bg-gradient-primary text-white font-medium shadow-button hover:shadow-lg transform transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Ajouter à la bibliothèque
          </button>
          <button 
            type="button" 
            @click="resetForm" 
            class="flex-1 inline-flex justify-center items-center px-6 py-3 rounded-lg bg-white border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Réinitialiser
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, ref, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getCurrentInstance } from 'vue'

export default defineComponent({
  name: 'Add',
  setup() {
    const router = useRouter()
    const instance = getCurrentInstance()
    const store = useStore()
    const currentYear = ref(new Date().getFullYear())
    
    const form = reactive({
      title: '',
      creator: '',
      year: currentYear.value,
      consumed: false
    })
    
    const submitForm = () => {
      store.dispatch('addItem', { ...form })
      router.push('/library')
      setTimeout(() => {
        if (instance && instance.proxy) {
          instance.proxy.$notify({
            type: 'success',
            text: 'Élément ajouté avec succès à votre bibliothèque!'
          })
        }
      }, 100)
    }
    
    const resetForm = () => {
      form.title = ''
      form.creator = ''
      form.year = currentYear.value
      form.consumed = false
    }
    
    return {
      form,
      currentYear,
      submitForm,
      resetForm
    }
  }
})
</script>