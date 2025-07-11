import { createRouter, createWebHistory} from 'vue-router'
import DashboardPage from '../pages/DashboardPage.vue';
import ProductPage from '../pages/ProductPage.vue';
import ServicePage from '../pages/ServicePage.vue';
import AboutPage from '../pages/AboutPage.vue';

const routes = [
    {path:'/', component: DashboardPage},
    {path:'/products', component: ProductPage},
    {path:'/services', component: ServicePage},
    {path:'/about', component: AboutPage}

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;