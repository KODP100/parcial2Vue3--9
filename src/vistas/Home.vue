<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">Lista de Productos</h1>

    <!-- Grid para las tarjetas de productos -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div 
        v-for="(producto, index) in productos" 
        :key="index" 
        class="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
      >
        <h3 class="text-lg font-semibold">{{ producto.nombre }}</h3>
        <p class="text-gray-600">{{ producto.descripcion }}</p>
        <router-link :to="{ name: 'Producto', params: { id: index }}" class="mt-4 text-blue-500 hover:underline">Ver detalles</router-link>
      </div>
    </div>

    <!-- Botón para ir a la vista de información de productos (tabla) -->
    <div class="mt-6">
      <router-link to="/InformacionProductos" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
        Ver Información de Productos
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productos: []
    };
  },
  mounted() {
    // Cargar productos desde localStorage si existen
    const savedProductos = localStorage.getItem('productos');
    if (savedProductos) {
      this.productos = JSON.parse(savedProductos);
    }
  }
};
</script>
