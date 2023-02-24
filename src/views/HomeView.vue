<script setup>
import Farm from '@/components/Farm.vue';
import StoryLine from '@/components/StoryLine.vue';
import Truck from '@/components/Truck.vue';
import Workdesk from '@/components/Workdesk.vue';
import Factory from '@/components/factory.vue';
import Worker from '@/components/Worker.vue';
import Storyworld from '@/components/Storyworld.vue';
</script>

<template>


  <div class="w-full  overflow-hidden">
<div class="flex flex-col gap-28">
  <StoryLine class="mt-0.5"></StoryLine>
    <Workdesk></Workdesk>
    <Truck :flipped="false"></Truck>
    <Farm class="mt-64"></Farm>
    <Truck :flipped="false"></Truck>
    <Factory></Factory>
    <Worker></Worker>
    <Storyworld></Storyworld>
    <h1 class="text-center font-Labrada font-semibold text-3xl mb-10">Edamus, Bibamus, Gaudeamus</h1>
</div>
</div>
</template>
