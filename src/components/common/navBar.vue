<template>
    <nav>
      <router-link to="/cadastro">Cadastro</router-link>
      <router-link to="/listagem">Listagem</router-link>
      <router-link to="/delecao">Deleção</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavBar",
  };
  </script>
  
  <style scoped>
  nav {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  </style>
  
