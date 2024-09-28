<template>
  <div class="app">
    <h3>Edad y Número de Hijos</h3>
    <form @submit.prevent="checkDetails">

      

      <div class="form-group">
        <!-- Campo para la edad -->
        <label for="age">Your Age:</label>
        <select v-model="age" id="age" required>
          <option value="under_30">Under 30 years old</option>
          <option value="30_40">30 - 40 years old</option>
          <option value="over_40">More than 40 years</option>
        </select>
        <span class="message" v-if="ageMessage">{{ ageMessage }}</span>
      </div>

      <div class="form-group">
        <!-- Campo para número de hijos -->
        <label for="children">Children number:</label>
        <select v-model="children" id="children" required>
          <option value="no_children">I don't have kids</option>
          <option value="one_child">one son</option>
          <option value="2_3_children">2-3 sons</option>
          <option value="over_3_children">more than 3 sons</option>
        </select>
        <span class="message" v-if="childrenMessage">{{ childrenMessage }}</span>
      </div>

      <div class="form-group">
        <label for="location">Select Location:</label>
        <select v-model="location" id="location" required>
          <option value="Oviedo">Oviedo</option>
          <option value="Gijon">Gijon</option>
        </select>
        <span class="message" v-if="locationMessage">{{ locationMessage }}</span>
      </div>

      <div class="form-group">
        <!-- Campo para comportamiento -->
        <label for="behavior">Behavior:</label>
        <select v-model="behavior" id="behavior" required>
          <option value="sporty">I am an athlete</option>
          <option value="walking">I like walking</option>
          <option value="quiet_zone">Quiet area</option>
        </select>
        <span class="message" v-if="behaviorMessage">{{ behaviorMessage }}</span>
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
    const location = ref(null);
    const age = ref(null); // Para la edad
    const children = ref(null); // Para el número de hijos
    const behavior = ref(null); 

    const locationMessage = ref("");
    const ageMessage = ref("");
    const childrenMessage = ref("");
    const behaviorMessage = ref("");

    const checkDetails = () => {

      

      // Validación para la edad
      if (age.value === "under_30") {
        ageMessage.value = "You have less than 30 years. ";
      } else if (age.value === "30_40") {
        ageMessage.value = "You have between 30 and 40 years, ";
      } else if (age.value === "over_40") {
        ageMessage.value = "You have more than 40 years, ";
      }

      // Validación para el número de hijos
      if (children.value === "no_children") {
        childrenMessage.value = " with no children, you need a apartment with one room, ";
      } else if (children.value === "one_child") {
        childrenMessage.value = " with one children, you need a apartment with 2 rooms, ";
      } else if (children.value === "2_3_children") {
        childrenMessage.value = " with 2 or 3 children, you need a apartment with 3 rooms, ";
      } else if (children.value === "over_3_children") {
        childrenMessage.value = " with more than 3 children, you need a apartment with 3 rooms, ";
      }

      if (location.value === "Oviedo") {
        locationMessage.value = "in Oviedo, ";
      } else if (location.value === "Gijon") {
        locationMessage.value = "in Gijon, ";
      }

      if (behavior.value === "sporty") {
        behaviorMessage.value = "near a sporting zone";
      } else if (behavior.value === "walking") {
        behaviorMessage.value = "near a walking street";
      } else if (behavior.value === "quiet_zone") {
        behaviorMessage.value = "near a public garden";
      }


    };

    return {
      location,
      age,
      children,
      behavior,
      locationMessage,
      ageMessage,
      childrenMessage,
      behaviorMessage,
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
  width: 10%; /* Ancho para que la etiqueta y el select se alineen correctamente */
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
