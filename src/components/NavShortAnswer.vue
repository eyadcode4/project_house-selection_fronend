<script>
  export default {
    data() {
      return {
        logoSrc: '', 
      };
    },
    methods: {
      login() {
        
        //alert('Registro iniciado');
      
      this.$router.push('login');
      },
    },
  };
</script>

<template>
  
    <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div class="container">
       
        <a class="navbar-brand me-2">
          <img src="../assets/imag/logrealstate.webp" 
            height="80" 
            alt="Logo inmobiliaria" 
            loading="lazy" 
            style="margin-top: -1px;" 
          />
        </a>
  
      
        <div class="d-flex align-items-center">
          <button @click="login" type="button" class="btn btn-primary me-3">
            for more info: login
          </button>
        </div>
      </div>
    </nav>
</template>
  

  
<style scoped>
  
  .navbar-brand{
    width: 50px;
  }
</style>
  
  