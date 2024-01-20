<script setup lang="ts">
import { computed, ref } from 'vue'
import { PrimeButton } from '@/components/primeVue'
import SpaceGridCard from './SpaceGridCard.vue'

type ViewStyleType = 'grid' | 'list'

const viewStyle = ref<ViewStyleType>('grid')

const viewStyleClass = computed(() => `style-view-${viewStyle.value}`)

const handleStyle = (style: ViewStyleType) => (viewStyle.value = style)
</script>

<template>
    <div class="spaces-header">
        <h1>Spaces</h1>
        <div>
            <span class="p-buttonset">
                <PrimeButton
                    icon="pi pi-th-large"
                    text
                    :raised="viewStyle !== 'grid'"
                    severity="secondary"
                    aria-label="Vista cuadriculada"
                    @click="handleStyle('grid')"
                />
                <PrimeButton
                    icon="pi pi-bars"
                    text
                    :raised="viewStyle !== 'list'"
                    severity="secondary"
                    aria-label="Vista listada"
                    @click="handleStyle('list')"
                />
            </span>
            <PrimeButton
                class="filter-btn"
                text
                raised
                severity="secondary"
                icon="pi pi-filter"
            />
            <PrimeButton icon="pi pi-plus" class="add-btn" raised label="Nuevo" />
        </div>
    </div>
    <section class="spaces-container" :class="viewStyleClass">
        <SpaceGridCard />
        <SpaceGridCard />
        <SpaceGridCard />
    </section>
</template>

<style scoped lang="css">
.spaces-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.add-btn,
.filter-btn {
    margin-left: 12px;
}

.spaces-container {
    margin-top: 30px;
}

.style-view-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

.style-view-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

@media (min-width: 768px) {
    .style-view-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }
}

@media (min-width: 960px) {
    .style-view-grid {
        gap: 30px;
    }
}

@media (min-width: 1200px) {
    .style-view-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
