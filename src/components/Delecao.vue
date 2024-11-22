<template>
    <div class="center">
      <h1>Deleção de Livros</h1>
      <ul v-if="livros.length > 0">
        <li v-for="(livro, index) in livros" :key="index">
          {{ livro.titulo }} - {{ livro.autor }}
          <button @click="deletarLivro(index)" class="excluir">Excluir</button>
        </li>
      </ul>
      <p v-else>Não há itens registrados para excluir.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        livros: [],
      };
    },
    methods: {
      deletarLivro(index) {
        this.livros.splice(index, 1);
        localStorage.setItem("livros", JSON.stringify(this.livros));
      },
    },
    mounted() {
      this.livros = JSON.parse(localStorage.getItem("livros")) || [];
    },
  };
  </script>
  