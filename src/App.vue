<script setup>
import {RouterView}  from 'vue-router'
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import CookiesConsent from './components/CookiesConsent.vue';

import { useCookies } from "vue3-cookies";
import { ref } from 'vue';
const { cookies } = useCookies();

const cookiesAccepted  = ref(cookies.get('accepted') ?? false)
const pending = ref(localStorage.getItem('pending')?? 'true')
function acceptCookies(value) {
  if (value) {
    
    cookies.set('accepted',true);
  }
  cookiesAccepted.value = value
  localStorage.setItem('pending',false)
  pending.value=false
}
</script>

<template>
  <Navbar></Navbar>
  <RouterView/>
  <Footer></Footer>
  <CookiesConsent v-if="pending === 'true'" @rejected="acceptCookies(false)" @accepted="acceptCookies(true)"></CookiesConsent>
</template>