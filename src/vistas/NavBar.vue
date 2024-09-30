<template>
  <nav class="bg-gray-800 p-4">
    <ul class="flex space-x-4">
      <li><router-link to="/Home" class="text-white">Inicio</router-link></li>
      <li><router-link to="/Registro" class="text-white">Registrar Producto</router-link></li>
      <li><router-link to="/Producto" class="text-white">Detalle producto</router-link></li>
      <li><router-link to="/Profile" class="text-white">Perfil</router-link></li>
      <li><router-link to="/InformacionProductos" class="text-white">Info</router-link></li>
      <li><router-link to="/Api" class="text-white">API</router-link></li>
      <li><router-link to="/Contacto" class="text-white">Contactanos</router-link></li>
      <li><a href="#" @click.prevent="logout" class="text-white">Cerrar sesión</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('authToken'); // Eliminar token de autenticación
      this.$router.push('/'); // Redirigir al login
    },
  },
};
</script>

<style scoped>
/* Estilos si es necesario */
</style>
