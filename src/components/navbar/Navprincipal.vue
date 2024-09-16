<script>
  export default {
    data() {
      return {
        logoSrc: '', // Aquí puedes agregar la URL del logo de la inmobiliaria
      };
    },
    methods: {
      signup() {
        // Lógica para el botón de registro
        alert('Registro iniciado');
      },
    },
  };
</script>

<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div class="container">
        <!-- Logo de la inmobiliaria -->
        <a class="navbar-brand me-2">
          <img 
            :src="logoSrc" 
            height="16" 
            alt="Logo inmobiliaria" 
            loading="lazy" 
            style="margin-top: -1px;" 
          />
        </a>
  
        <!-- Botón Sign Up -->
        <div class="d-flex align-items-center">
          <button @click="signup" type="button" class="btn btn-primary me-3">
            Sign up for free
          </button>
        </div>
      </div>
    </nav>
</template>
  

  
<style scoped>
  /* Agrega tus estilos personalizados si es necesario */
</style>
  
  