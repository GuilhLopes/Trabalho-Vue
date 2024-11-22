import { createRouter, createWebHistory } from "vue-router";
import Cadastro from "../components/Cadastro.vue";
import Listagem from "../components/Listagem.vue";
import Delecao from "../components/Delecao.vue";

const routes = [
  { path: "/cadastro", component: Cadastro },
  { path: "/listagem", component: Listagem },
  { path: "/delecao", component: Delecao },
  { path: "/", redirect: "/cadastro" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
