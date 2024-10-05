<script setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const name = ref("");
const dateConsult = ref("");
const locationSite = ref("");
const generalBehavior = ref("");
const mensaje = ref("");


const phoneNumber = "0034666666666"; 
const generateWhatsAppLink = () => {
  const text = `Hello, my name is ${name.value}. I'd like to consult.`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
};

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
      body: JSON.stringify(datosConsult),
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
              <label for="locationSite">Site location</label>
              <select class="form-control" id="Location Site" v-model="locationSite">
                <option>Oviedo</option>
                <option>Gijon</option>
              </select>
            </div>

            <div class="form-group">
              <label for="generalBehavior">General Behavior</label>
              <select class="form-control" id="generalBehavior" v-model="generalBehavior">
                <option>sportsman</option>
                <option>Swimming</option>
                <option>Rural zone</option>
                <option>City center</option>
              </select>
            </div>

            <div id="containerbutton">
              <button type="submit" id="button" class="btn btn-primary">
                submit
              </button>
            </div>
          </form>
          
          
          <div class="whatsapp-icon mt-3">
            <a :href="generateWhatsAppLink()" target="_blank">
              <font-awesome-icon :icon="faWhatsapp" size="2x" />
              Contact us on WhatsApp
            </a>
          </div>

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
  background-color: #6b4ce9;
  width: 500px;
}
select,
input {
  background-color: #d1f9f3;
  font-size: 25px;
}
label {
  color: white;
}
.form-group {
  padding: 10px;
  font-size: 25px;
}
#button {
  background-color: #501dc7;
  color: white;
  font-size: 20px;
  font-weight: bolder;
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
  background-color: white;
  font-size: 25px;
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
.whatsapp-icon a {
  display: flex;
  background-color: white;
  align-items: center;
  color: #25d366;
  font-size: 33px;
  font-weight: bold;
  text-decoration: none;
}
.whatsapp-icon a:hover {
  color: #128c7e;
}
</style>
