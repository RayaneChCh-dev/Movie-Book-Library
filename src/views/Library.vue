<template>
  <div class="max-w-5xl mx-auto px-4">
    <div class="flex flex-col items-center mb-8">
      <h2 class="text-3xl font-bold text-dark bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Ma Bibliothèque</h2>
      <div class="h-1 w-20 bg-gradient-primary rounded-full mt-2"></div>
    </div>
    
    <div class="bg-white rounded-xl shadow-custom p-5 mb-8">
      <div class="flex flex-col sm:flex-row gap-4">
        <div class="relative flex-shrink-0">
          <select 
            v-model="filter" 
            class="appearance-none w-full sm:w-48 px-4 py-3 bg-white rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pr-10"
          >
            <option value="all">Tous les éléments</option>
            <option value="consumed">Lus/Vus</option>
            <option value="not-consumed">Non lus/Non vus</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
        
        <div class="relative flex-grow">
          <input 
            type="text" 
            v-model="searchTerm" 
            placeholder="Rechercher dans votre collection..." 
            class="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pl-10"
          />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="filteredItems.length > 0" class="grid grid-cols-1 gap-6">
      <library-item 
        v-for="item in filteredItems" 
        :key="item.id" 
        :item="item" 
      />
    </div>
    
    <div v-else class="text-center py-16 px-6 bg-white rounded-xl shadow-custom">
      <div v-if="items && items.length === 0">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <h3 class="text-xl font-semibold text-dark mb-2">Votre bibliothèque est vide</h3>
        <p class="text-gray-600 mb-6">Ajoutez des livres ou des films pour commencer à constituer votre collection !</p>
      </div>
      <div v-else>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
        </svg>
        <h3 class="text-xl font-semibold text-dark mb-2">Aucun résultat trouvé</h3>
        <p class="text-gray-600 mb-6">Aucun élément ne correspond à vos critères de recherche.</p>
      </div>
      <router-link to="/add" class="inline-flex mx-auto items-center px-6 py-3 rounded-lg bg-gradient-primary text-white font-medium shadow-button hover:shadow-lg transform transition-all duration-200 hover:-translate-y-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        Ajouter un élément
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import LibraryItem from '../components/LibraryItem.vue'

export default defineComponent({
  name: 'Library',
  components: {
    LibraryItem
  },
  setup() {
    const store = useStore()
    const filter = ref('all')
    const searchTerm = ref('')
    const items = computed(() => {
      try {
        return store.getters.allItems || []
      } catch (error) {
        console.error('Error accessing store getters:', error)
        return []
      }
    })
    
    const filteredItems = computed(() => {
      if (!items.value) return []
      let result = items.value
      if (filter.value === 'consumed') {
        result = result.filter(item => item.consumed)
      } else if (filter.value === 'not-consumed') {
        result = result.filter(item => !item.consumed)
      }
      
      if (searchTerm.value && searchTerm.value.trim() !== '') {
        const term = searchTerm.value.toLowerCase()
        result = result.filter(item => 
          (item.title && item.title.toLowerCase().includes(term)) || 
          (item.creator && item.creator.toLowerCase().includes(term))
        )
      }
      
      return result
    })
    
    return {
      filter,
      searchTerm,
      items,
      filteredItems
    }
  }
})
</script>