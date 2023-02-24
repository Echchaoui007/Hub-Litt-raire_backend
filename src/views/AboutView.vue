<script setup>

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>


<template>
  <div class="my-10">
    <p class="text-center leading-relaxed text-xl p-8 sm:p-24">
      {{ t('about.header') }}
    </p>
  </div>


  <section my-8>
    <div dir="rtl"
      class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 border-4 border-lime-700 border-solid border-black rounded-lg ;">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <lottie-player class="w-fit " src="/assets/table.json" background="transparent" speed="1" loop
            autoplay></lottie-player>

        </div>

        <div class="lg:py-24">
          <h2 class="text-xl    text-center  font-bold sm:text-3xl text-amber-800">
            {{ t('about.sec2') }}
          </h2>
          <br>
          <h2 class="text-xl    text-center  font-bold sm:text-3xl text-amber-800">
            {{ t('about.sec22') }}
          </h2>




        </div>
      </div>
    </div>
  </section>


  <section class="my-8">
    <div
      class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 border-4 border-solid border-black rounded-lg ;">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">

        <lottie-player class="w-fit -scale-x-100" src="/assets/workdesk.json" background="transparent" speed="1" loop
          autoplay></lottie-player>


        <div class="lg:py-24">
          <h2 class="text-xl    text-center  font-bold sm:text-3xl text-amber-800">
            {{ t('about.sec3') }}
          </h2>
          <br>
          <h2 class="text-xl    text-center  font-bold sm:text-3xl text-amber-800">
            {{ t('about.sec32') }}
          </h2>

        </div>
      </div>
    </div>
  </section>

  <section my-8>
    <div dir="rtl"
      class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 border-4 border-lime-700 border-solid border-black rounded-lg ;">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <video class="mx-auto" src="@/assets/World.mp4" alt="" autoplay loop muted></video>
        <div class="lg:py-24">
          <h2 class="text-xl    text-center  font-bold sm:text-3xl text-amber-800">
            {{ t('about.sec4') }}
          </h2>
          <br>
          <h2 class="text-xl  capialize  text-center  font-bold sm:text-3xl text-amber-800">
            {{ t('about.sec42') }}
          </h2>

        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
