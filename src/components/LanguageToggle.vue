<script setup>
import i18n from '@/i18n';
import { ref } from 'vue';
const shown = ref(false)

const showDropdown = () => {
    shown.value = true
}
const hideDropdown = () => {
    shown.value = false
}

const changeLang = (lang) => {
    i18n.global.locale.value = lang

}

</script>
<template>
    <div class="relative">
        <span @mouseenter="showDropdown">
<img class="w-8" src="@/assets/language.png" alt="">
        </span>
        <div @mouseleave="hideDropdown" :class="{ 'hidden': !shown }"
            class="absolute bottom-0 translate-y-[100%]  rounded-2xl shadow bg-slate-100 p-4">
            <ul>
                <li class="p-0.5 cursor-pointer hover:bg-slate-900 hover:text-white rounded-full" @click="changeLang(locale)" v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`"
                    :value="locale">{{ locale }}</li>

            </ul>
        </div>

    </div>
</template>