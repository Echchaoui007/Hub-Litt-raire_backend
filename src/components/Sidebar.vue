<template>
  <div :class="{ '-right-96': !shown, 'right-0': shown }"
    class="fixed z-50 flex flex-col p-4 justify-between items-center top-0 shadow transition-all duration-200 ease-out h-screen w-72 bg-slate-300">
    <nav class="w-full flex items-center justify-center flex-col">
      <div>
        <router-link to="/"><img class="w-52" src="/image/PARMEXPORT.png" alt="PARMEXPORT"></router-link>
      </div>
      <ul class="gap-8 text-center flex flex-col mt-10  mr-6 text-xl text-gray-900">
        <li><router-link @click="this.$emit('toggle_sidebar')" to="/">Home</router-link></li>
        <li><router-link @click="this.$emit('toggle_sidebar')" to="/contact">Contact</router-link></li>
        <li><router-link @click="this.$emit('toggle_sidebar')"  to="/about">About Us</router-link></li>
        <li><button class="w-8 h-8 " @click="this.$emit('toggle_sidebar')">
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75">
              </path>
            </svg>
          </button></li>

      </ul>
    </nav>
    <span class="text-gray-500">echchaoui copyrights 2023</span>
  </div>
  <!-- sidebar backdrop -->
  <div @click="this.$emit('toggle_sidebar')" :class="{ 'hidden': !shown }"
    class="w-screen h-screen fixed top-0 bg-gray-900/10 backdrop-blur-sm "></div>
</template>

<script>
export default {
  props: ['shown'],
  name: "Sidebar",
  emits: ['toggle_sidebar'],
}
</script>

<style scoped>

</style>