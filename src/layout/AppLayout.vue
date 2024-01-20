<script setup lang="ts">
import LayoutHeader from './partials/LayoutHeader.vue'
</script>
<template>
    <main>
        <LayoutHeader />
        <div class="container">
            <RouterView />
        </div>
    </main>
</template>
<style scoped lang="css"></style>
