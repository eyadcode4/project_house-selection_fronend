<template>
  <div class="app">
    <h3>Edad y Número de Hijos</h3>
    <form @submit.prevent="checkDetails">
      <div class="form-group">
        <!-- Campo para la edad -->
        <label for="age">Your Age:</label>
        <select v-model="age" id="age" required>
          <option value="under_30">Menos de 30 años</option>
          <option value="30_40">Entre 30 y 40 años</option>
          <option value="over_40">Más de 40 años</option>
        </select>
        <span class="message" v-if="ageMessage">{{ ageMessage }}</span>
      </div>

      <div class="form-group">
        <!-- Campo para número de hijos -->
        <label for="children">Children number:</label>
        <select v-model="children" id="children" required>
          <option value="no_children">No tengo hijos</option>
          <option value="one_child">Un hijo</option>
          <option value="2_3_children">Entre 2 y 3 hijos</option>
          <option value="over_3_children">Más de 3 hijos</option>
        </select>
        <span class="message" v-if="childrenMessage">{{ childrenMessage }}</span>
      </div>

      <div class="form-group">
        <!-- Campo para comportamiento -->
        <label for="behavior">Behavior:</label>
        <select v-model="behavior" id="behavior" required>
          <option value="sporty">Soy deportista</option>
          <option value="walking">Me gusta caminar</option>
          <option value="quiet_zone">Zona tranquila</option>
        </select>
      </div>

      <br>
      <button @click="checkDetails" type="button">Show Result</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const age = ref(null); // Para la edad
    const children = ref(null); // Para el número de hijos
    const behavior = ref(null); // Para el comportamiento
    const ageMessage = ref("");
    const childrenMessage = ref("");

    const checkDetails = () => {
      // Validación para la edad
      if (age.value === "under_30") {
        ageMessage.value = "Estás muy joven";
      } else if (age.value === "30_40") {
        ageMessage.value = "Estás joven";
      } else if (age.value === "over_40") {
        ageMessage.value = "Estás adecuado";
      }

      // Validación para el número de hijos
      if (children.value === "no_children") {
        childrenMessage.value = "No necesitas una casa grande";
      } else if (children.value === "one_child") {
        childrenMessage.value = "Necesita casa de 2 habitaciones";
      } else if (children.value === "2_3_children") {
        childrenMessage.value = "Necesita casa de 3 habitaciones";
      } else if (children.value === "over_3_children") {
        childrenMessage.value = "Necesita una casa con más de 3 habitaciones";
      }
    };

    return {
      age,
      children,
      behavior,
      ageMessage,
      childrenMessage,
      checkDetails,
    };
  },
};
</script>

<style scoped>
.app {
  width: 100%;

  margin-bottom: 30px;
  text-align: left;
  font-size: xx-large;
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* Espaciado entre los grupos de formulario */
}

label {
  font-size: 24px;
  margin-right: 10px; /* Espaciado entre la etiqueta y el select */
  width: 30%; /* Ancho para que la etiqueta y el select se alineen correctamente */
}

select {
  width: 30%; /* Ancho del select */
  padding: 10px;
  font-size: 24px;
  margin-right: 10px; /* Espaciado entre el select y el mensaje */
}

.message {
  font-size: 20px;
  font-weight: bold;
  color: #FF0000; /* Color del mensaje */
  white-space: nowrap; /* Evitar que el mensaje se divida en varias líneas */
}

button {
  padding: 10px 15px;
  font-size: 24px;
  cursor: pointer;
}
</style>
