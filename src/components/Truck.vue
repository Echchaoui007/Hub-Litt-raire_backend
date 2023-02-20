<script>
import { useElementVisibility } from "@vueuse/core";
import { ref } from "vue";

export default {
    setup() {
        const el = ref(null)
        const targetIsVisible = useElementVisibility(el)
        return {
            el,
            targetIsVisible
        }
    }
}
</script>
<template>
    
    <div ref="el" :class="{ 'bg-white': targetIsVisible,'-translate-x-64':!targetIsVisible }"
        class="w-full mb-32 h-96 transition-all duration-[4s]">
        <lottie-player class="z-0 mx-auto w-fit h-[40rem] -scale-x-100" src="./assets/truck.json" background="transparent" speed="0.5" loop
      autoplay></lottie-player>
    </div>
</template>