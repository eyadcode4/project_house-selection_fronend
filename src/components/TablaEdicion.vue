<script setup>
import { ref, onMounted } from "vue";

const solicitudes = ref([]);
const selectedSolicitud = ref(null);
const editForm = ref({
  name: "",
  dateConsult: "",
  locationSite: "",
  generalBehavior: "",
});

const fetchSolicitudes = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/consult/all");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Fetched data:", data);
    solicitudes.value = data;
  } catch (error) {
    console.error("Error fetching solicitudes:", error);
  }
};

const deleteSolicitud = async (idConsult) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/consult/${idConsult}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    solicitudes.value = solicitudes.value.filter(
      (solicitud) => solicitud.idConsult !== idConsult
    );
  } catch (error) {
    console.error("Error deleting solicitud:", error);
  }
};

const openEditModal = (solicitud) => {
  selectedSolicitud.value = solicitud;
  editForm.value = {
    name: solicitud.name,
    dateConsult: solicitud.dateConsult.join("-"),
    locationSite: solicitud.locationSite,
    generalBehavior: solicitud.generalBehavior,
  };
};

const updateSolicitud = async () => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/consult/${selectedSolicitud.value.idConsult}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editForm.value),
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const updatedSolicitud = await response.json();
    const index = solicitudes.value.findIndex(
      (solicitud) => solicitud.idConsult === updatedSolicitud.idConsult
    );
    solicitudes.value[index] = updatedSolicitud;
  } catch (error) {
    console.error("Error updating solicitud:", error);
  }
};

onMounted(() => {
  fetchSolicitudes();
});
</script>

<template>
  <main>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">date</th>
          <th scope="col">location site</th>
          <th scope="col">general behavior</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="solicitud in solicitudes" :key="solicitud.idConsult">
          <td>{{ solicitud.name }}</td>
          <td>{{ solicitud.dateConsult.join("-") }}</td>
          <td>{{ solicitud.locationSite }}</td>
          <td>{{ solicitud.generalBehavior }}</td>
          <td>
            <img
              src="../assets/imag/edit.png"
              alt="Editar"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="openEditModal(solicitud)"
            />
          </td>
          <td>
            <img
              src="../assets/imag/delete.jpg"
              alt="Eliminar"
              @click="deleteSolicitud(solicitud.idConsult)"
            />
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Consult edit</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="container mt-5">
            <div class="card">
              <div class="card-body">
                <form @submit.prevent="updateSolicitud">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input
                      v-model="editForm.name"
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="name"
                    />
                  </div>

                  <div class="form-group">
                    <label for="dateConsult">Consult date</label>
                    <input
                      v-model="editForm.dateConsult"
                      type="date"
                      class="form-control"
                      id="date"
                    />
                  </div>

                  <div class="form-group">
                    <label for="locationSite">location Site</label>
                    <select
                      v-model="editForm.locationSite"
                      class="form-control"
                      id="locationSite"
                    >
                      
                      <option>Oviedo</option>
                      <option>Gijon</option>
                      
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="generalBehavior">General Behavior</label>
                    <select
                      v-model="editForm.generalBehavior"
                      class="form-control"
                      id="generalBehavior"
                      rows="4"
                      placeholder="generalBehavior"
                      >
                      
                      <option>sportsman</option>
                      <option>Not active</option>
                      
                    </select>
                  </div>
                  <div id="containerbutton">
                    <button type="submit" id="button" class="btn btn-primary">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              id="buttonsecondary"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  
}
table {
 
  /* border-collapse: collapse; */
  width: 95%;
  border-collapse: separate; /* Necesario para que funcione el border-radius */
  border-spacing: 0 10px; /* Espacio entre las filas para mostrar bien el borde redondeado */
  font-size: 20px;
  border: 4px solid blue;

}
th {
  background-color: #505bc6 !important;
  color: white;
  font-size: 25px;
  padding: 0 25px;
  font-weight: bolder;
  border: 2px solid blue;
  border-radius: 10px;
  
}
tr {
  background-color: #3ed92d !important;
  border: 4px solid blue;
  
}
td {
  background-color: #e9be20 !important;
  font-weight: bolder;
  border: 2px solid blue;
  border-radius: 10px;
}
img {
  width: 25px;
  height: 25px;
}
@media (max-width: 768px) {
  main {
    max-height: 800px;
    overflow-y: auto;
  }
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  thead tr {
    display: none;
  }

  tr {
    margin-bottom: 10px;
    
  }

  td {
    text-align: right;
    padding-left: 50%;
    position: relative;
  }

  td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 10px;
    font-weight: bold;
    text-align: left;
  }
  table {
    margin-top: auto;
    padding-top: 20px;
  }
  img {
    filter: hue-rotate(30);
  }
}

main {
  padding: 20px;
  
  
}
.card {
  background-color: #1795a0;
  
 
  
}
select,
textarea,
input {
  background-color: #fae1e1;
  font-weight: bolder;
}
label {
  color: white;
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
  background-color: #5c41e1;
  color: white;
}
#containerbutton {
  text-align: center;
  margin: 10px;
}
option {
  background-color: #fae1e1;
}

#buttonsecondary {
  background-color: #223ea5;
  color: white;
  border: 2px solid #fae1e1;
  text-align: center;
}
#buttonsecondary:hover {
  background-color: #fae1e1;
  border: 2px solid #2eb422;
  color: black;
}
</style>
