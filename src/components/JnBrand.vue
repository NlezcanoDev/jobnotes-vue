<script setup lang="ts">
import { computed, type PropType } from 'vue'

type sizes = 'sm' | 'md' | 'lg'

const props = defineProps({
    size: {
        type: String as PropType<sizes>,
        default: 'md',
    },
})
const brandSize = computed(() => `size-${props.size}`)
</script>

<template>
    <h1 class="brand" :class="brandSize">Job<span>Notes</span></h1>
</template>

<style scoped lang="css">
.brand {
    font-family: var(--font-brand);
    color: var(--gray-900);
}

.brand span {
    font-family: var(--font-brand);
    color: var(--green-700);
}

.size-sm {
    font-size: 16px;
}

.size-md {
    font-size: 24px;
}

.size-lg {
    font-size: 32px;
}
</style>
