import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import StudentForm3 from "@/components/form/StudentForm3.vue";
// import NotFound from "@/components/NotFound.vue";

const routes = [
  { path: "/home", component: Home },
  { path: "/about/:id", component: About },
  { path: "/student", component: StudentForm3 },
  { path: "/", redirect: "/home" },
];

// // 404 not found
// const notFound = {
//   path: "/:pathMatch(.*)*",
//   component: NotFound,
// };

export default createRouter({
  history: createWebHistory(),
  routes,
});