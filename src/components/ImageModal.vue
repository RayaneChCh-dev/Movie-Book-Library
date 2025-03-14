<template>
    <transition name="modal">
      <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="closeModal">
        <div class="absolute inset-0 bg-black opacity-75"></div>
        
        <div class="relative z-10 bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-screen overflow-hidden">
          <div class="flex justify-between items-center p-4 border-b">
            <h3 class="text-lg font-medium">{{ title }}</h3>
            <button @click="closeModal" class="text-gray-400 hover:text-gray-500">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="p-6 flex items-center justify-center">
            <img :src="imageUrl" :alt="title" class="max-h-[70vh] object-contain" />
          </div>
          
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t">
            <button 
              @click="closeModal" 
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-dark focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'ImageModal',
    props: {
      show: {
        type: Boolean,
        required: true
      },
      imageUrl: {
        type: String,
        required: true
      },
      title: {
        type: String,
        default: 'Image'
      }
    },
    setup(props, { emit }) {
      const closeModal = () => {
        emit('close')
      }
      
      return {
        closeModal
      }
    }
  })
  </script>
  
  <style scoped>
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.3s;
  }
  
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
  </style>