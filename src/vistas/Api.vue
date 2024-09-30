<template>
    <div id="app">
      <h1 class="title">Lista de Pokémon</h1>
      <div class="pokemon-container">
        <div class="pokemon-card" v-for="pokemon in pokemons" :key="pokemon.name">
          <img :src="pokemon.sprite" alt="Imagen de Pokémon" class="pokemon-image" />
          <h3>{{ pokemon.name }}</h3>
        </div>
      </div>
      <button @click="getNextPage" class="next-button">Siguiente Página</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        pokemons: [],
        nextUrl: 'https://pokeapi.co/api/v2/pokemon'
      };
    },
    mounted() {
      this.fetchPokemons();
    },
    methods: {
      async fetchPokemons() {
        try {
          const response = await axios.get(this.nextUrl);
          const pokemonDetails = await Promise.all(
            response.data.results.map(async (pokemon) => {
              const details = await axios.get(pokemon.url);
              return {
                name: pokemon.name,
                sprite: details.data.sprites.front_default
              };
            })
          );
          this.pokemons = pokemonDetails;
          this.nextUrl = response.data.next;
        } catch (error) {
          console.error('Error al obtener los Pokémon:', error);
        }
      },
      getNextPage() {
        this.fetchPokemons();
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos generales */
  #app {
    text-align: center;
    background-color: red;
    min-height: 100vh;
    padding: 20px;
    box-sizing: border-box;
  }
  
  /* Estilo del título */
  .title {
    font-size: 2.5rem;
    color: white;
    margin-bottom: 20px;
  }
  
  /* Contenedor de Pokémon */
  .pokemon-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  /* Tarjetas de Pokémon */
  .pokemon-card {
    background-color: white;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 150px;
  }
  
  .pokemon-card h3 {
    margin-top: 10px;
    text-transform: capitalize;
  }
  
  /* Imagen de Pokémon */
  .pokemon-image {
    width: 100px;
    height: 100px;
  }
  
  /* Botón de siguiente página */
  .next-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: white;
    border: none;
    border-radius: 5px;
    color: red;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .next-button:hover {
    background-color: #ffecec;
  }
  </style>
  