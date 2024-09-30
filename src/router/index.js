import { createRouter, createWebHistory } from 'vue-router';
import Auth from '../vistas/Auth.vue';
import Home from '../vistas/Home.vue';
import Registro from '../vistas/Registro.vue';
import Producto from '../vistas/Producto.vue';
import Profile from '../vistas/Profile.vue';
import InformacionProductos from '../vistas/InformacionProductos.vue';
import Api from '../vistas/Api.vue';
import Contacto from '../vistas/Contacto.vue';

// Función para verificar si el usuario está autenticado
function isAuthenticated() {
  return !!localStorage.getItem('authToken');
}

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },  // Ruta protegida
  },
  {
    path: '/Registro',
    name: 'Registro',
    component: Registro,
    meta: { requiresAuth: true },  // Ruta protegida
  },
  {
    path: '/Producto/:id',
    name: 'Producto',
    component: Producto,
    meta: { requiresAuth: true },  // Ruta protegida
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true },  // Ruta protegida
  },
  {
    path: '/InformacionProductos',
    name: 'InformacionProductos',
    component: InformacionProductos,
    meta: { requiresAuth: true },  // Ruta protegida
  },
  {
    path: '/Api',
    name: 'Api',
    component: Api,
    meta: { requiresAuth: true },  // Ruta protegida
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component: Contacto,
    meta: { requiresAuth: true },  // Ruta protegida
  },
];

const router = createRouter({
  history: createWebHistory(),  // Sin parámetros
  routes,
});

// Protección de rutas
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Verificar si el usuario está autenticado
    if (!isAuthenticated()) {
      next('/');  // Redirigir al login (Auth) si no está autenticado
    } else {
      next();  // Continuar si está autenticado
    }
  } else {
    next();  // Continuar si la ruta no requiere autenticación
  }
});


export default router;
