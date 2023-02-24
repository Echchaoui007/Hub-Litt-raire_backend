<script>
import { useElementVisibility } from "@vueuse/core";
import { ref } from "vue";

export default {
    props: { "flipped": Boolean },
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
    <div ref="el"
        :class="{ '-scale-x-100': flipped, 'translate-x-64': !targetIsVisible && !flipped, '-translate-x-64': !targetIsVisible && flipped }"
        class="w-full mb-32 h-96 transition-all duration-[4s]">

        <video class="h-[40rem] z-0 mx-auto" src="@/assets/Truck.mp4" alt="" autoplay loop muted></video>
    </div>
</template>