<script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const age = ref(null);
      const message = ref("");
  
      const checkAge = () => {
        if (age.value < 30) {
          message.value = "Estás muy joven";
        } else if (age.value >= 30 && age.value <= 40) {
          message.value = "Estás joven";
        } else if (age.value > 40) {
          message.value = "Estás adecuado";
        }
      };
  
      return {
        age,
        message,
        checkAge,
      };
    },
  };
  </script>

<template>
    <div class="app">
      <h1>Consulta de Edad</h1>
      <form @submit.prevent="checkAge">
        <label for="age">Edad:</label>
        <input type="number" v-model="age" id="age" required />
  
        <button type="submit">Consultar</button>
      </form>
  
      <div v-if="message" class="message">
        <p>{{ message }}</p>
      </div>
    </div>
  </template>
  
  
  <style scoped>
  .app {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  
  label {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  input {
    padding: 5px;
    font-size: 16px;
    margin-bottom: 15px;
  }
  
  button {
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .message {
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
  }
  </style>
  