<script setup>
</script>

<template>
  <div class="card-container">
    
    
    
    <div class="card" style="width: 12rem;">
      <div class="card-body">
        <img src="../assets/imag/corte de luz.jpg" class="card-img-top" alt="up">
        
        <a href="https://tarifaluzhora.es/info/corte-luz" target="_blank" class="btn" >Know More</a>
      </div>
    </div>
    
    <div class="card" style="width: 12rem;">
      <div class="card-body">
        <img src="../assets/imag/lift.jpg" class="card-img-top" alt="up">
        <a href="https://solidaridadintergeneracional.es/wp/no-hay-ascensor-en-tu-casa-si-tienes-mas-de-70-anos-tienes-derecho-a-pedir-que-lo-instalen/" target="_blank" class="btn"  >Know More</a>
      </div>
    </div>
    
    
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.card {
  margin-top: 2em;
  padding: 1.5em 0.5em 0.5em;
  border-radius: 2em;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  border-radius: 50%;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.card .card-title {
  font-weight: 500;
  font-size: 1.0em;
  padding: 0.1em;
}

.card .btn {
  border-radius: 2em;
  background-color: teal;
  color: #ffffff;
  padding: 0.5em 1.5em;
}

.card .btn:hover {
  background-color: rgba(0, 128, 128, 0.7);
  color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
