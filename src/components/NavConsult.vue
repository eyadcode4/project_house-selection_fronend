<script>
  // 
  
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const logoSrc = ref(''); // Definir el estado usando ref
    const router = useRouter(); // Obtener la instancia del enrutador

    const showresult = () => {
      // alert('Registro iniciado');
      router.push('shortanswer'); // Navegar a 'shortanswer'
    };

    return {
      logoSrc,
      showresult,
    };
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
  
      
        <!-- <div class="d-flex align-items-center">
          <button @click="showresult" type="button" class="btn btn-primary me-3">
            Show Result
          </button>
        </div> -->
      </div>
    </nav>
</template>
  

  
<style scoped>
  
  .navbar-brand{
    width: 50px;
  }
</style>
  
  