<template>
  <div class="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow">
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="title" class="block font-semibold mb-1 text-gray-700">Titre :</label>
        <input
          id="title"
          v-model="form.title"
          type="text"
          required
          placeholder="Titre du livre/film"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      
      <div class="mb-4">
        <label for="creator" class="block font-semibold mb-1 text-gray-700">Auteur/Réalisateur :</label>
        <input
          id="creator"
          v-model="form.creator"
          type="text"
          required
          placeholder="Nom de l'auteur ou du réalisateur"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      
      <div class="mb-4">
        <label for="year" class="block font-semibold mb-1 text-gray-700">Année :</label>
        <input
          id="year"
          v-model.number="form.year"
          type="number"
          min="1800"
          :max="currentYear"
          required
          placeholder="Année de publication/sortie"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      
      <div class="mb-6 flex items-center">
        <input
          id="consumed"
          v-model="form.consumed"
          type="checkbox"
          class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
        />
        <label for="consumed" class="ml-2 block text-gray-700">Déjà lu/vu</label>
      </div>
      
      <div class="flex gap-4">
        <button type="submit" class="btn btn-primary">Ajouter à la bibliothèque</button>
        <button type="button" class="btn btn-secondary" @click="resetForm">Réinitialiser</button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'AddItem',
  emits: ['item-added'],
  setup(props, { emit }) {
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
      emit('item-added')
      resetForm()
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
}
</script>
