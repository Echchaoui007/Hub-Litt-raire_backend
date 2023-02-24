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

   
        <lottie-player class=" z-0 mx-auto w-fit h-[40rem] " src="/assets/factory.json" background="transparent" speed="1" loop
            autoplay></lottie-player>
 
</template>