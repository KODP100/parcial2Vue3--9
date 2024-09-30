<template>
  <section class="text-gray-600 body-font relative">
    <div class="absolute inset-0 bg-gray-300">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://maps.app.goo.gl/LW8yfTmBpsK6wpTP6"
        style=""
      ></iframe>
    </div>
    <div class="container px-5 py-24 mx-auto flex">
      <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Buzon</h2>
        <p class="leading-relaxed mb-5 text-gray-600">Puedes mandarnos tus sugerencias por este medio</p>
        
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">Correo electronico</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600">mensaje</label>
          <textarea
            v-model="message"
            id="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            required
          ></textarea>
        </div>
        
        <button @click.prevent="sendEmail" class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Enviar
        </button>
        
        <p v-if="successMessage" class="text-green-500 mt-3">{{ successMessage }}</p>
        <p v-if="errorMessage" class="text-red-500 mt-3">{{ errorMessage }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      message: "",
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    async sendEmail() {
      try {
        const response = await axios.post("http://localhost:3000/send-email", {
          email: this.email,
          message: this.message,
        });
        
        if (response.status === 200) {
          this.successMessage = "Correo enviado exitosamente.";
          this.errorMessage = "";
          // Reiniciar el formulario
          this.email = "";
          this.message = "";
        }
      } catch (error) {
        this.errorMessage = error.response?.data?.message || "Error al enviar el correo.";
        this.successMessage = "";
      }
    },
  },
};
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
