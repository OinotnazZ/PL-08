import { createRouter, createWebHistory } from "vue-router";

import FormTasks from "../pages/FormTasks.vue";
import TaskDetails  from "../pages/TaskDetails.vue";
import TaskPainel from "../pages/TaskPainel.vue";

const routes = [

  { path: "/", component: TaskPainel },
  { path: "/form", component: FormTasks },
  { path: "/details/:id", component: TaskDetails },

];


const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;