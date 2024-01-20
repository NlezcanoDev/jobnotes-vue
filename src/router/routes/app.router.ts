import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/layout/AppLayout.vue'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/pages/home/HomePage.vue')
            }
        ]
    }
]

export default routes