<template>
  <div :class="{ '-right-96': !shown, 'right-0': shown }"
    class="fixed z-50 flex flex-col p-4 justify-between items-center top-0 shadow transition-all duration-200 ease-out h-screen w-72 bg-slate-300">
    <nav class="w-full flex items-center justify-center flex-col">
      <div>
        <router-link to="/"><img class="w-52" src="/image/PARMEXPORT.png" alt="PARMEXPORT"></router-link>
      </div>
      <ul class="gap-8 text-center flex flex-col mt-10  mr-6 text-xl text-gray-900">
        <li><router-link @click="this.$emit('toggle_sidebar')" to="/">Home</router-link></li>
        <li><router-link @click="this.$emit('toggle_sidebar')" to="/about">{{ t('navbar.about') }}</router-link></li>
        <li><router-link @click="this.$emit('toggle_sidebar')" to="/contact">{{ t('navbar.contact') }}</router-link></li>
        <li><button class="w-8 h-8 " @click="this.$emit('toggle_sidebar')">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75">
          </path>
        </svg>
      </button></li>
      <LanguageToggle></LanguageToggle>

      </ul>
    </nav>
    <span class="text-gray-500">© 2023 PARMEXPORT di Michele Santacroce P.IVA 03037880345 C.F SNTMHL92B14G337P</span>
  </div>
  <!-- sidebar backdrop -->
  <div @click="this.$emit('toggle_sidebar')" :class="{ 'hidden': !shown }"
    class="w-screen h-screen fixed top-0 bg-gray-900/10 backdrop-blur-sm "></div>
</template>

<script>
import LanguageToggle from './LanguageToggle.vue';
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { t } = useI18n()
    return { t }
  },
  props: ["shown"],
  name: "Sidebar",
  emits: ["toggle_sidebar"],
  components: { LanguageToggle }
}
</script>

<style scoped></style>