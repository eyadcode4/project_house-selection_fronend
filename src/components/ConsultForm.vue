<script setup>
import { ref } from "vue";

const fecha = ref("");
const edad = ref();
const joven = ref("");
const Comportamiento = ref("");
const mensaje = ref("");

const enviarSolicitud = async (casa) => {
  casa.preventDefault();

  const datosFormulario = {
    fecha: fecha.value,
    edad: edad.value,
    joven: joven.value,
    tema: Comportamiento.value,
  };

  try {
    const respuesta = await fetch("http://localhost:8080/api/v1/consult", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        edad: datosFormulario.edad,
        dateConsult: datosFormulario.fecha,        
        joven: datosFormulario.joven,
        Comportamiento: datosFormulario.Comportamiento,
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
              <label for="fecha">Fecha de la Solicitud</label>
              <input
                type="date"
                class="form-control"
                id="fecha"
                v-model="fecha"
              />
            </div>

            <div class="form-group">
              <label for="edad">Edad de la Persona</label>
              <input
                type="text"
                class="form-control"
                id="edad"
                v-model="edad"
                placeholder="Ingrese su edad"
              />
            </div>

            <div class="form-group">
              <label for="cole">niños en el cole</label>
              <select class="form-control" id="cole" v-model="cole">
                <option value="" disabled>elije uno</option>
                <option>si</option>
                <option>no</option>
              </select>
            </div>

            <div class="form-group">
              <label for="tema">Comportamiento</label>
              <select class="form-control" id="tema" v-model="tema">
                <option value="" disabled>elije el mas importante</option>
                <option>Deportesta</option>
                <option>Caminar</option>
                <option>vivir en zona tranquilla</option>
                <option>virir en zona muy activa</option>
              </select>
            </div>

            <div id="containerbutton">
              <button type="submit" id="button" class="btn btn-primary">
                Enviar solicitud
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
  background-color: hsl(233, 59%, 39%);
  border-radius: 10px;
}
select,
textarea,
input {
  background-color: #fae1e1;
}
label {
  color: white;
  font-weight: bolder;
  margin-bottom: 10px;
}
.form-group {
  padding: 10px;
}
#button {
  background-color: #fae1e1;
  color: black;
  border: 2px solid #fae1e1;
  text-align: center;
  font-weight: bolder;
}
#button:hover {
  background-color: #a52e22;
  color: white;
}
#containerbutton {
  text-align: right;
  margin: 10px;
}
option {
  background-color: #fae1e1;
  color:#a52e22;
  font-weight: bolder;
}
.alert {
  padding: 10px;
  border-radius: 5px;
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
