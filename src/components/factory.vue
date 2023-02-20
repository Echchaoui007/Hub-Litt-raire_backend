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
    <div class="fixed top-0 text-red-400">{{ targetIsVisible }}</div>
    <div ref="el" :class="{ 'bg-green-900': targetIsVisible,'translate-x-36':!targetIsVisible }"
        class="w-full in-range:bottom-0 h-96 transition-all duration-1000">

    </div>
</template>