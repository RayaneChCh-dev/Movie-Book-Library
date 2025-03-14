<template>
  <div class="max-w-5xl mx-auto px-4">
    <div class="flex flex-col items-center mb-8">
      <h2 class="text-3xl font-bold text-dark bg-gradient-to-r from-warning to-yellow-600 bg-clip-text text-transparent">Mes Favoris</h2>
      <div class="h-1 w-20 bg-gradient-to-r from-warning to-yellow-600 rounded-full mt-2"></div>
    </div>
    
    <div v-if="favoriteItems.length > 0" class="grid grid-cols-1 gap-6">
      <div class="relative overflow-hidden">
        <div class="absolute -top-6 -right-6">
          <div class="h-12 w-12 bg-warning opacity-10 rounded-full"></div>
        </div>
        <div class="absolute top-1/4 -left-8">
          <div class="h-16 w-16 bg-yellow-500 opacity-10 rounded-full"></div>
        </div>
        
        <library-item 
          v-for="item in favoriteItems" 
          :key="item.id" 
          :item="item" 
        />
      </div>
    </div>
    
    <div v-else class="text-center py-16 px-6 bg-white rounded-xl shadow-custom">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-warning mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      <h3 class="text-xl font-semibold text-dark mb-2">Vous n'avez pas encore de favoris</h3>
      <p class="text-gray-600 mb-6">Ajoutez des éléments à vos favoris en cliquant sur l'étoile dans votre bibliothèque.</p>
      
      <router-link to="/library" class="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-warning to-yellow-600 text-white font-medium shadow-button hover:shadow-lg transform transition-all duration-200 hover:-translate-y-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
        Voir ma bibliothèque
      </router-link>
    </div>
    <div class="fixed -bottom-16 -left-16 w-48 h-48 bg-warning opacity-5 rounded-full"></div>
    <div class="fixed top-1/3 -right-16 w-32 h-32 bg-primary opacity-5 rounded-full"></div>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import LibraryItem from '../components/LibraryItem.vue'

export default defineComponent({
  name: 'Favorites',
  components: {
    LibraryItem
  },
  setup() {
    const store = useStore()
    
    const favoriteItems = computed(() => {
      try {
        return store.getters.favoriteItems || []
      } catch (error) {
        console.error('Error accessing favorite items:', error)
        return []
      }
    })
    
    return {
      favoriteItems
    }
  }
})
</script>