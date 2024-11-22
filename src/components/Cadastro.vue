<template>
    <div>
      <h1>Cadastro de Livros</h1>
      <form @submit.prevent="cadastrarLivro">
        <label for="titulo">Título:</label>
        <input v-model="livro.titulo" type="text" id="titulo" required />
  
        <label for="autor">Autor:</label>
        <input v-model="livro.autor" type="text" id="autor" required />
  
        <label for="preco">Preço:</label>
        <input v-model.number="livro.preco" type="number" id="preco" required />
  
        <button type="submit">Cadastrar</button>
      </form>
      <p v-if="mensagem">{{ mensagem }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        livro: {
          titulo: "",
          autor: "",
          preco: null,
        },
        mensagem: "",
      };
    },
    methods: {
      cadastrarLivro() {
        if (!this.livro.titulo || !this.livro.autor || !this.livro.preco) {
          this.mensagem = "Todos os campos são obrigatórios.";
          return;
        }
        const livros = JSON.parse(localStorage.getItem("livros")) || [];
        livros.push({ ...this.livro });
        localStorage.setItem("livros", JSON.stringify(livros));
        this.livro = { titulo: "", autor: "", preco: null };
        this.mensagem = "Livro cadastrado com sucesso!";
      },
    },
  };
  </script>
  