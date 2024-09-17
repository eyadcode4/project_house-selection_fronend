<script>
  export default {
    data() {
      return {
        logoSrc: '', 
      };
    },
    methods: {
      showresult() {
        
        //alert('Registro iniciado');
      
      this.$router.push('shortanswer');
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
          <button @click="showresult" type="button" class="btn btn-primary me-3">
            Show Result
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
  
  