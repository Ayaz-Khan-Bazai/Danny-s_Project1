import { createRouter , createWebHashHistory } from "vue-router";

// Define Routes by Importing
import Home from "../views/Home.vue";
import about from "../views/about.vue";
import Contact from "../views/Contact.vue";
import Content from "../views/Content.vue";
import FootBall from "../views/FootBall.vue";
import HandBall from "../views/HandBall.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: about,
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/Content',
        name: 'Content',
        component: Content,
    },
        {
        path: '/FootBall',
        name: 'Football',
        component: FootBall,
    },
        {
        path: '/HandBall',
        name: 'HandBall',
        component: HandBall,
    },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: ' border-b-2 border-black', // when route matches
  linkExactActiveClass: 'shadow-xl shadow-gray-300' // exact match
})

export default router;
