<template>
  <div 
    class="bg-white rounded-lg shadow-card transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 overflow-hidden"
    :class="{ 'border-l-4 border-primary': item.consumed }"
  >
    <div class="p-5 flex flex-col md:flex-row justify-between gap-4">
      <div class="flex-1">
        <div class="flex items-center mb-2">
          <h3 class="text-xl font-semibold text-dark">{{ item.title }}</h3>
          <span v-if="item.consumed" class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Lu/Vu
          </span>
        </div>
        <p class="text-gray-600 mb-1">{{ item.creator }} • {{ item.year }}</p>
        <div class="flex items-center mt-2">
          <span 
            class="inline-flex items-center cursor-pointer" 
            @click="toggleFavorite"
          >
            <svg xmlns="http://www.w3.org/2000/svg" 
              :class="{'text-warning fill-current': isFavorite, 'text-gray-400': !isFavorite}"
              class="h-5 w-5 transition-colors duration-300" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span class="ml-1 text-sm text-gray-500">{{ isFavorite ? 'Favori' : 'Ajouter aux favoris' }}</span>
          </span>
        </div>
      </div>
      
      <div class="flex flex-row md:flex-col gap-2 justify-end">
        <button 
          @click="toggleConsumed" 
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
          :class="item.consumed ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-primary text-white hover:bg-primary-dark shadow-button'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="item.consumed" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          {{ item.consumed ? 'Non lu/vu' : 'Marquer comme lu/vu' }}
        </button>
        
        <button 
          @click="removeItem" 
          class="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Supprimer
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'LibraryItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    
    const favorites = computed(() => store.state.favorites)
    const isFavorite = computed(() => favorites.value.includes(props.item.id))
    
    const toggleConsumed = () => {
      store.dispatch('toggleConsumed', props.item.id)
    }
    
    const toggleFavorite = () => {
      store.dispatch('toggleFavorite', props.item.id)
    }
    
    const removeItem = () => {
      if (confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
        store.dispatch('removeItem', props.item.id)
      }
    }
    
    return {
      favorites,
      isFavorite,
      toggleConsumed,
      toggleFavorite,
      removeItem
    }
  }
})
</script>