<script setup lang="ts">
import { ref } from 'vue'

import JnBrand from '@/components/JnBrand.vue'
import { PrimeAvatar, PrimeMenu } from '@/components/primeVue'

import { MenuItem } from 'primevue/menuitem'

const menu = ref()
const items: Array<MenuItem> = [
    {
        label: 'Nahuel Lezcano',
        items: [
            { label: 'Perfil', icon: 'pi-user' },
            { label: 'Notificaciones', icon: 'pi-inbox' },
            { label: 'Ajustes', icon: 'pi-cog' },
        ],
    },
    {
        items: [{ label: 'Cerrar sesión', class: 'menu-sesion', icon: 'pi-sign-out' }],
    },
]

const toggleMenu = (e: Event) => menu.value.toggle(e)
</script>

<template>
    <header class="header">
        <nav class="container header-nav">
            <JnBrand size="lg" />
            <div class="header-actions">
                <PrimeAvatar
                    icon="pi pi-user"
                    class="mr-2 avatar"
                    size="large"
                    shape="circle"
                    @click="toggleMenu"
                    aria-haspopup="true"
                    aria-controls="overlay_menu"
                />
                <PrimeMenu ref="menu" id="overlay_menu" :model="items" :popup="true">
                    <template #item="{ item }">
                        <div class="menu-item" :class="item.class">
                            <i class="pi" :class="item.icon"></i>

                            <span>{{ item.label }}</span>
                        </div>
                    </template>
                </PrimeMenu>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="css">
.header {
    background-color: white;
    border-bottom: 1px solid var(--gray-200);
}

.header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 30px;
}

.toggle-mode {
    display: flex;
    align-items: center;
    gap: 8px;
}

.toggle-mode i {
    font-size: 20px;
}

.avatar {
    cursor: pointer;
}

.menu-item {
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 8px 20px;
    cursor: pointer;
}

.menu-sesion {
    color: red;
}
</style>
