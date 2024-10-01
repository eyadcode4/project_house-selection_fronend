<script setup>
import { ref } from "vue";

const name = ref("");
const dateConsult = ref("");
const locationSite = ref("");
const generalBehavior = ref("");
const mensaje = ref("");

const enviarSolicitud = async (event) => {
  event.preventDefault();

  const datosConsult = {
    name: name.value,
    dateConsult: dateConsult.value,
    locationSite: locationSite.value,
    generalBehavior: generalBehavior.value,
  };

  try {
    const respuesta = await fetch("http://localhost:8080/api/v1/consult", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: datosConsult.name,
        dateConsult: datosConsult.dateConsult,
        locationSite: datosConsult.locationSite,
        generalBehavior: datosConsult.generalBehavior,
      }),
    });

    let datos;
    const contentType = respuesta.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      datos = await respuesta.json();
    } else {
      datos = {};
    }

    if (!respuesta.ok) {
      console.error("Error details:", datos);
      throw new Error(
        `Error al enviar la solicitud: ${
          datos.message || respuesta.statusText || "Unknown error"
        }`
      );
    }

    mensaje.value = "Solicitud enviada con éxito";
  } catch (error) {
    console.error("Fetch error:", error);
    mensaje.value = `Error: ${error.message}`;
  }
};
</script>

<template>
  <main>
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
          <form @submit="enviarSolicitud">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="name"
                placeholder="Name"
              />
            </div>

            <div class="form-group">
              <label for="dateConsult">Consult date</label>
              <input
                type="date"
                class="form-control"
                id="dateConsult"
                v-model="dateConsult"
              />
            </div>

            <div class="form-group">
              <label for="locationSite">locationSite</label>
              <select class="form-control" id="Location Site" v-model="locationSite">
                <option value="" disabled>Select location</option>
                <option>Oviedo</option>
                <option>Gijon</option>
              </select>
            </div>

            <div class="form-group">
              <label for="generalBehavior">generalBehavior</label>
              <select class="form-control" id="generalBehavior" v-model="generalBehavior">
                <option value="" disabled>Select behavior</option>
                <option>Deportist</option>
                <option>Not active</option>
              </select>
            </div>

            
            <div id="containerbutton">
              <button type="submit" id="button" class="btn btn-primary">
                submit
              </button>
            </div>
          </form>
          <div
            v-if="mensaje"
            class="alert mt-3"
            :class="{
              'alert-success': mensaje.includes('éxito'),
              'alert-danger': mensaje.includes('Error'),
            }"
          >
            {{ mensaje }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 20px;
}
.card {
  background-color: #7567ae;
  
}
select,
textarea,
input {
  background-color: #fae1e1;
}
label {
  color: white;
}
.form-group {
  padding: 10px;
}
#button {
  background-color: #501dc7;
  color: white;
  border: 2px solid #fae1e1;
  text-align: center;
}
#button:hover {
  background-color: #a52e22;
  color: white;
}
#containerbutton {
  text-align: center;
  margin: 10px;
}
option {
  background-color: #fae1e1;
}
.alert {
  padding: 10px;
 
}
.alert-success {
  background-color: #d4edda;
  color: #155724;
}
.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
}
</style>
