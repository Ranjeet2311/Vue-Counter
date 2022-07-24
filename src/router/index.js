import { createRouter, createWebHistory } from "vue-router";
import CounterCompVue from "../components/CounterComp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "CounterCompVue",
      component: CounterCompVue,
    },
    // {
    //   path: "/about",
    //   name: "CounterCompVue",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/CounterCompVue.vue"),
    // },
  ],
});

export default router;
