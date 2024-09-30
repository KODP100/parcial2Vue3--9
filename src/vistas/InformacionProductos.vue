<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-6">Información de Todos los Productos</h1>
  
      <!-- Tabla con todos los productos -->
      <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr class="bg-blue-500 text-white">
            <th class="py-3 px-6 text-left">Nombre</th>
            <th class="py-3 px-6 text-left">Descripción</th>
            <th class="py-3 px-6 text-left">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(producto, index) in productos" :key="index" class="border-b">
            <td class="py-4 px-6">{{ producto.nombre }}</td>
            <td class="py-4 px-6">{{ producto.descripcion }}</td>
            <td class="py-4 px-6">${{ producto.precio }}</td>
          </tr>
        </tbody>
      </table>
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
  