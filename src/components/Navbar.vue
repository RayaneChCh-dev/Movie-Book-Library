<template>
  <nav class="bg-gradient-primary shadow-lg">
    <div class="container mx-auto flex justify-between items-center px-6 py-4 flex-wrap md:flex-nowrap">
      <div class="brand">
        <h1 class="text-2xl font-bold text-white m-0 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Ma Collection
        </h1>
      </div>
      <div class="nav-links flex gap-2 md:gap-4">
        <router-link 
          to="/library" 
          class="px-4 py-2 md:py-2 rounded-lg font-medium text-white hover:bg-white/20 transition-colors duration-200 flex items-center"
          active-class="bg-white/20 shadow-inner-highlight"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
          </svg>
          Bibliothèque
        </router-link>
        <router-link 
          to="/add" 
          class="px-4 py-2 md:py-2 rounded-lg font-medium text-white hover:bg-white/20 transition-colors duration-200 flex items-center"
          active-class="bg-white/20 shadow-inner-highlight"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Ajouter
        </router-link>
        <router-link 
          to="/favorites" 
          class="px-4 py-2 md:py-2 rounded-lg font-medium text-white hover:bg-white/20 transition-colors duration-200 flex items-center"
          active-class="bg-white/20 shadow-inner-highlight"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Favoris
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar'
})
</script>