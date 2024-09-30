<template>
  <div class="container mx-auto p-4">
    <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <!-- Imagen del producto (opcional) -->
      <div class="bg-gray-200 h-64 flex items-center justify-center">
        <img :src="producto.imagen || 'https://via.placeholder.com/300'" alt="Imagen del producto" class="object-cover h-full w-full">
      </div>

      <!-- Detalles del producto -->
      <div class="p-6">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ producto.nombre }}</h1>
        <p class="text-gray-700 mb-4">{{ producto.descripcion }}</p>
        <div class="mb-6">
          <p class="text-lg font-semibold text-green-600">Precio: ${{ producto.precio }}</p>
        </div>

        <!-- Botón para volver a la lista de productos -->
        <router-link to="/Home" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Volver a la lista de productos
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      producto: {}
    };
  },
  mounted() {
    // Obtener el ID del producto desde los parámetros de la URL
    const productoId = this.$route.params.id;
    const savedProductos = JSON.parse(localStorage.getItem('productos'));

    // Encontrar el producto con el ID correspondiente
    if (savedProductos && savedProductos[productoId]) {
      this.producto = savedProductos[productoId];
    }
  }
};
</script>
