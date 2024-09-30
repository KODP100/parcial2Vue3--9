<template>
  <div id="app">
    <!-- Mostrar la barra de navegación si el usuario está autenticado y no está en la página de Auth -->
    <NavBar v-if="isAuthenticated && !isAuthPage" />
    <router-view />
  </div>
</template>

<script>
import NavBar from './vistas/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      isAuthenticated: false, // Estado para controlar si el usuario está autenticado
    };
  },
  computed: {
    isAuthPage() {
      // Verifica si la ruta actual es la de autenticación (login/registro)
      return this.$route.path === '/';
    },
  },
  created() {
    // Verificar si el token de autenticación existe en el localStorage
    this.isAuthenticated = !!localStorage.getItem('authToken');
  },
};
</script>

<style scoped>
/* Estilos si es necesario */
</style>
