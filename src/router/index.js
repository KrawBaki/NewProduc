import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "main" },
    component: HomeView,
  },
  {
    path: "/card",
    name: "card",
    meta: { layout: "main" },
    component: () => import("../views/MedicalCard.vue"),
  },
  {
    path: "/healthy",
    name: "healthy",
    meta: { layout: "main" },
    component: () => import("../views/HealthyView.vue"),
  },
  {
    path: "/news",
    name: "news",
    meta: { layout: "main" },
    component: () => import("../views/NewsList.vue"),
  },
  {
    path: "/rubric",
    name: "rubric",
    meta: { layout: "main" },
    component: () => import("../views/RubricView.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: { layout: "empty" },
    component: () => import("../views/RegisterView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
