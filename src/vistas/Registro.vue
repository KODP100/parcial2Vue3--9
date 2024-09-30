<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Registrar Nuevo Producto</h1>
    
    <!-- Formulario para registrar producto -->
    <form @submit.prevent="registrarProducto" class="space-y-4">
      <div>
        <label class="block text-gray-700">Nombre:</label>
        <input v-model="nuevoProducto.nombre" type="text" class="border border-gray-300 rounded p-2 w-full">
      </div>

      <div>
        <label class="block text-gray-700">Descripción:</label>
        <textarea v-model="nuevoProducto.descripcion" class="border border-gray-300 rounded p-2 w-full"></textarea>
      </div>

      <div>
        <label class="block text-gray-700">Precio:</label>
        <input v-model="nuevoProducto.precio" type="number" class="border border-gray-300 rounded p-2 w-full">
      </div>

      <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300">
        Registrar
      </button>
    </form>

    <router-link to="/Home" class="mt-4 text-blue-500 hover:underline">Volver a la lista de productos</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoProducto: {
        nombre: '',
        descripcion: '',
        precio: ''
      }
    };
  },
  methods: {
    registrarProducto() {
      // Obtener productos existentes de localStorage
      let productos = JSON.parse(localStorage.getItem('productos')) || [];

      // Añadir el nuevo producto
      productos.push(this.nuevoProducto);

      // Guardar los productos de vuelta en localStorage
      localStorage.setItem('productos', JSON.stringify(productos));

      // Limpiar el formulario
      this.nuevoProducto = { nombre: '', descripcion: '', precio: '' };

      // Redirigir al Home después de registrar el producto
      this.$router.push('/Home');
    }
  }
};
</script>
