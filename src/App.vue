<template>
  <div id="app" class="min-h-screen flex flex-col bg-gradient-light text-dark font-sans antialiased">
    <nav-bar />
    <div class="flex-1 p-6 md:p-8">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import NavBar from './components/Navbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar
  }
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>