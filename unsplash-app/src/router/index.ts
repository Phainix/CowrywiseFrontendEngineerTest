import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Landing from "../pages/Landing.vue";
import Search from "../pages/Search.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
