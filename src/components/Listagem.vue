<template>
    <div class="center">
      <h1>Listagem de Livros</h1>
      <ul v-if="livros.length > 0">
        <li v-for="(livro, index) in livros" :key="index">
          {{ livro.titulo }} - {{ livro.autor }} - R$ {{ livro.preco.toFixed(2) }}
        </li>
      </ul>
      <p v-else>Não há itens registrados.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        livros: [],
      };
    },
    mounted() {
      this.livros = JSON.parse(localStorage.getItem("livros")) || [];
    },
  };
  </script>
  