<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Perfil de la Empresa</h1>

    <div v-if="!isEditing">
      <!-- Mostrar los detalles del perfil -->
      <div class="mb-4">
        <h2 class="text-2xl font-bold">Nombre: {{ perfilEmpresa.nombre }}</h2>
        <p><strong>Descripción:</strong> {{ perfilEmpresa.descripcion }}</p>
        <p><strong>Rubro:</strong> {{ perfilEmpresa.rubro }}</p>
        <p><strong>Dirección:</strong> {{ perfilEmpresa.direccion }}</p>
      </div>

      <!-- Botón para habilitar la edición -->
      <button 
        @click="isEditing = true" 
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Editar Perfil
      </button>
    </div>

    <!-- Formulario de edición -->
    <div v-else>
      <form @submit.prevent="guardarPerfil" class="space-y-4">
        <div>
          <label class="block text-gray-700">Nombre de la Empresa:</label>
          <input v-model="perfilEmpresa.nombre" type="text" class="border border-gray-300 rounded p-2 w-full">
        </div>

        <div>
          <label class="block text-gray-700">Descripción:</label>
          <textarea v-model="perfilEmpresa.descripcion" class="border border-gray-300 rounded p-2 w-full"></textarea>
        </div>

        <div>
          <label class="block text-gray-700">Rubro:</label>
          <input v-model="perfilEmpresa.rubro" type="text" class="border border-gray-300 rounded p-2 w-full">
        </div>

        <div>
          <label class="block text-gray-700">Dirección:</label>
          <input v-model="perfilEmpresa.direccion" type="text" class="border border-gray-300 rounded p-2 w-full">
        </div>

        <!-- Botones para guardar o cancelar la edición -->
        <div class="flex space-x-4">
          <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300">
            Guardar
          </button>
          <button 
            @click="cancelarEdicion" 
            class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Variable para alternar entre vista de edición y vista normal
      isEditing: false,
      // Objeto que contiene la información del perfil de la empresa
      perfilEmpresa: {
        nombre: '',
        descripcion: '',
        rubro: '',
        direccion: ''
      }
    };
  },
  mounted() {
    // Cargar la información del perfil desde localStorage al montar el componente
    const savedPerfil = localStorage.getItem('perfilEmpresa');
    if (savedPerfil) {
      this.perfilEmpresa = JSON.parse(savedPerfil);
    }
  },
  methods: {
    guardarPerfil() {
      // Guardar el perfil de la empresa en localStorage
      localStorage.setItem('perfilEmpresa', JSON.stringify(this.perfilEmpresa));
      // Desactivar el modo de edición
      this.isEditing = false;
    },
    cancelarEdicion() {
      // Cancelar la edición y volver a cargar el perfil desde localStorage
      const savedPerfil = localStorage.getItem('perfilEmpresa');
      if (savedPerfil) {
        this.perfilEmpresa = JSON.parse(savedPerfil);
      }
      // Desactivar el modo de edición
      this.isEditing = false;
    }
  }
};
</script>

<style>
/* Estilos adicionales si es necesario */
</style>
