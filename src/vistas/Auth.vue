<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-semibold mb-6 text-center">
        {{ isLogin ? 'Login' : 'Registro' }}
      </h2>

      <form @submit.prevent="handleSubmit">
        <div v-if="!isLogin" class="mb-4">
          <label class="block text-sm font-medium mb-2" for="username">Usuario</label>
          <input v-model="username" type="text" id="username" class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium mb-2" for="email">Correo electrónico</label>
          <input v-model="email" type="email" id="email" class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium mb-2" for="password">Contraseña</label>
          <input v-model="password" type="password" id="password" class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>

        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
          {{ isLogin ? 'Iniciar sesión' : 'Registrarse' }}
        </button>
      </form>

      <p class="text-center mt-4">
        <a href="#" @click.prevent="toggleForm" class="text-blue-500 hover:underline">
          {{ isLogin ? '¿No tienes una cuenta? Regístrate' : '¿Ya tienes una cuenta? Inicia sesión' }}
        </a>
      </p>

      <p v-if="errorMessage" class="text-red-500 text-center mt-4">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
      username: '',
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    toggleForm() {
      this.isLogin = !this.isLogin;
      this.clearFields();
    },
    clearFields() {
      this.username = '';
      this.email = '';
      this.password = '';
      this.errorMessage = '';
    },
    handleSubmit() {
      if (this.isLogin) {
        this.loginUser();
      } else {
        this.registerUser();
      }
    },
    registerUser() {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      const storedUser = localStorage.getItem(this.email);

      if (!storedUser) {
        localStorage.setItem(this.email, JSON.stringify(user));
        alert('Usuario registrado correctamente');
        this.clearFields();
        this.isLogin = true; // Cambiar a modo login tras registro
      } else {
        this.errorMessage = 'El usuario ya existe';
      }
    },
    loginUser() {
      const storedUser = JSON.parse(localStorage.getItem(this.email));

      if (storedUser && storedUser.password === this.password) {
        // Guardar token ficticio para indicar que el usuario está autenticado
        localStorage.setItem('authToken', 'dummy-token');
        this.$router.push('/Home'); // Redirigir a Home tras iniciar sesión
      } else {
        this.errorMessage = 'Credenciales incorrectas';
      }
    },
  },
};
</script>

<style scoped>
/* Estilos si es necesario */
</style>
