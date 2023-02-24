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
<!--  <img class="w-screen" src="/assets/Mp4.mp4" alt="" srcset="">-->

  <video class="h-[45rem] mx-auto" src="@/assets/World.mp4" alt=""  autoplay loop muted></video>
</template>