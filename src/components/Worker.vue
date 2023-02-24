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

    <div ref="el" :class="{ 'bg-white-900': targetIsVisible, 'translate-x-36': !targetIsVisible }"
        class="mb-5 w-full in-range:bottom-0  transition-all duration-[4s]">

        <lottie-player class="z-0 mx-auto w-fit h-[40rem] " src="/assets/Worker.json" background="transparent"
            speed="0.5" loop autoplay></lottie-player>
    </div>
</template>