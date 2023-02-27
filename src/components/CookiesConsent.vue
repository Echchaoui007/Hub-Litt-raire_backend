<script setup>

import { useI18n } from 'vue-i18n'

const { t } = useI18n()
 
</script>
<template>
    <div class="fixed bottom-0 left-0 p-4 bg-white border-t-4">
        <h2 class="mb-2 text-xl font-heading">Cookie Policy</h2>
        <p class="mb-4 leading-relaxed text-black">{{ t('cookie.content') }} </p>
        <div class=" flex gap-5">
            <button
                class="rounded inline-flex items-center px-4 py-2 leading-none text-white bg-green-500 hover:bg-green-700"
                @click="$emit('accepted')" href="#">
                <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                </svg>
                {{ t('cookie.yes') }}
            </button>
            <button  @click="$emit('rejected')"
                class="rounded inline-flex items-center px-4 py-2  leading-none text-white bg-red-600 hover:bg-red-800"
                href="#">
                <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                {{ t('cookie.nop') }}
            </button>

        </div>
    </div>
</template>