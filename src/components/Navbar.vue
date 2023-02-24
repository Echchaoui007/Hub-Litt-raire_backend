<template>
  <header class="flex p-4 shadow z-30 bg-gradient-to-b from-green-400">
    <nav class="w-full flex justify-between">
      <div class="">
        <router-link to="/"><img class="w-52 md:w-64" src="/image/PARMEXPORT.png" alt="PARMEXPORT"></router-link>
      </div>
      <ul class="gap-8  text hidden md:flex mr-6 text-xl text-gray-500">
        <li><router-link class="hover:text-gray-700" to="/">Home</router-link></li>
        <li><router-link class="hover:text-gray-700" to="/about">{{ t('navbar.about') }}</router-link></li>
        <li><router-link class="hover:text-gray-700" to="/contact">{{ t('navbar.contact') }}</router-link></li>
        <LanguageToggle></LanguageToggle>
      </ul>
    </nav>
    <button @click="toggleSidebar" class="fill-black w-8 md:hidden" id="side-bar-toggle">
      <svg fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5">
        </path>
      </svg>
    </button>
  </header>

  <Sidebar :shown="sidebarShown" @toggle_sidebar="toggleSidebar"></Sidebar>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import LanguageToggle from './LanguageToggle.vue'
import { useI18n } from 'vue-i18n'


export default {
  setup() {
    const { t } = useI18n()
    return { t }
  },
  name: "Navbar",
  components: { Sidebar, LanguageToggle },
  data() {
    return { sidebarShown: false }
  },
  methods: {
    toggleSidebar() {
      this.sidebarShown = !this.sidebarShown;
    }
  }
}
</script>

<style scoped></style>