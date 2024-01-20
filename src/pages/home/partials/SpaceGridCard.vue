<script setup lang="ts">
import { PrimeButton, PrimeCard, PrimeChip, PrimeTag } from '@/components/primeVue'

const counters = {
    toDoCount: 20,
    annotationCount: 5,
    questionCount: 8,
}
</script>

<template>
    <PrimeCard class="grid-card">
        <template #header>
            <div class="grid-card-header">
                <h2>Space contentSpace contentSpace contentSpace content</h2>
                <PrimeButton icon="pi pi-ellipsis-v" severity="secondary" rounded text />
            </div>
            <div class="grid-card-info">
                <span>Actualizado: 20-01-2024 10:40</span>
                <PrimeTag severity="success" value="Pausado" rounded />
            </div>
        </template>
        <template #content>
            <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit viverra, arcu morbi
                aptent maecenas tempor lacinia ad, enim dapibus habitasse augue cursus
                fusce phasellus. Fringilla ullamcorper vulputate tellus accumsan est
                pharetra volutpat pulvinar mauris, diam sapien penatibus aliquam nullam
                erat varius suscipit, potenti vestibulum netus senectus laoreet hac
                sagittis magna. Senectus at fames elementum penatibus orci eleifend, vitae
                donec tellus malesuada.Lorem ipsum dolor sit amet consectetur adipiscing
                elit viverra, arcu morbi aptent maecenas tempor lacinia ad, enim dapibus
                habitasse augue cursus fusce phasellus. Fringilla ullamcorper vulputate
                tellus accumsan est pharetra volutpat pulvinar mauris, diam sapien
                penatibus aliquam nullam erat varius suscipit, potenti vestibulum netus
            </p>
        </template>
        <template #footer>
            <PrimeChip class="footer-tag tag-annotations">
                <strong class="footer-tag-cant">{{ counters.annotationCount }}</strong>
                <span class="text-base">Anotaciones</span>
            </PrimeChip>
            <PrimeChip class="footer-tag tag-todos">
                <strong class="footer-tag-cant">{{ counters.toDoCount }}</strong>
                <span class="text-base">Tareas</span>
            </PrimeChip>
            <PrimeChip class="footer-tag tag-questions">
                <strong class="footer-tag-cant">{{ counters.questionCount }}</strong>
                <span class="text-base">Preguntas</span>
            </PrimeChip>
        </template>
    </PrimeCard>
</template>

<style scoped lang="css">
.grid-card {
    max-height: 400px;
    padding: 14px 20px;
}

.grid-card-header {
    display: grid;
    grid-template-columns: auto 36px;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h2 {
        margin: 0;
        font-size: 18px;
        color: var(--gray-800);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    button {
        padding: 0;
        height: 36px;
        width: 36px;
    }

    span {
        font-size: 12px;
        color: var(--gray-400);
    }
}

.grid-card-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
}

:deep(.p-card-body) {
    padding: 0;
}

:deep(.p-card-content) {
    width: 100%;
    overflow: hidden;
    p {
        margin: 0;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 3;
    }
}

:deep(.p-card-footer) {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    .footer-tag {
        display: flex;
        gap: 4px;
        margin: 2px 6px;
        padding: 4px 8px;
    }
}
.tag-annotations {
    color: var(--gray-50);
    background-color: #db2777ce;
    border: 2px solid #db2777;
}
.tag-todos {
    color: var(--gray-50);
    background-color: #0284c7ce;
    border: 2px solid #0284c7;
}
.tag-questions {
    color: var(--gray-50);
    background-color: #65a30dce;
    border: 2px solid #65a30d;
}

@media (min-width: 768px) {
    :deep(.p-card-content) {
        p {
            -webkit-line-clamp: 4;
        }
    }
}
@media (min-width: 1200px) {
    :deep(.p-card-content) {
        p {
            -webkit-line-clamp: 5;
        }
    }
}
</style>
