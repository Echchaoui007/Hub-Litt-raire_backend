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
 
 <video  src="@/assets/Farm.mp4" alt=""  autoplay loop muted></video>

  <!-- <img class="h-[45rem] mx-auto" src="/assets/farm.png" ></img> -->
</template>