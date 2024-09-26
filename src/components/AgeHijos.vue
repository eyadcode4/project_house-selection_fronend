<template>
    <div class="app">
      <h3>Edad y Número de Hijos</h3>
      <form @submit.prevent="checkDetails">
        <div>
            <!-- Campo para la edad -->
            <label for="age">Edad:</label>
            <input type="number" v-model="age" id="age" required />
        </div>

        <div>
  
            <!-- Campo para número de hijos -->
            <label for="children">Número de hijos:</label>
            <input type="number" v-model="children" id="children" required />
        </div>
        <div>
            <label for="tema">Comportamiento</label>
              <select class="form-control" id="tema" v-model="tema">
                <option value="" disabled>elije el mas importante</option>
                <option>Deportesta</option>
                <option>Caminar</option>
                <option>vivir en zona tranquilla</option>
                <option>virir en zona muy activa</option>
              </select>
        </div>
  
        <button type="submit">Consultar</button>
      </form>
  
      <!-- Mostrar el mensaje relacionado con la edad -->
      <div v-if="ageMessage" class="message">
        <p>{{ ageMessage }}</p>
      </div>
  
      <!-- Mostrar el mensaje relacionado con el número de hijos -->
      <div v-if="childrenMessage" class="message">
        <p>{{ childrenMessage }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const age = ref(null); // Para la edad
      const children = ref(null); // Para el número de hijos
      const ageMessage = ref("");
      const childrenMessage = ref("");
  
      const checkDetails = () => {
        // Validación para la edad
        if (age.value < 30) {
          ageMessage.value = "Estás muy joven";
        } else if (age.value >= 30 && age.value <= 40) {
          ageMessage.value = "Estás joven";
        } else if (age.value > 40) {
          ageMessage.value = "Estás adecuado";
        }
  
        // Validación para el número de hijos
        if (children.value == 1) {
          childrenMessage.value = "Necesita casa de 2 habitaciones";
        } else if (children.value == 2) {
          childrenMessage.value = "Necesita casa de 3 habitaciones";
        } else if (children.value == 3) {
          childrenMessage.value = "Necesita casa de 2 habitaciones y 2 baños";
        } else if (children.value > 3) {
          childrenMessage.value = "Necesita una casa más de 2 habitaciones";
        } else {
          childrenMessage.value = ""; // No mostrar nada si no hay hijos
        }
      };
  
      return {
        age,
        children,
        ageMessage,
        childrenMessage,
        checkDetails,
      };
    },
  };
  </script>
  
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
  