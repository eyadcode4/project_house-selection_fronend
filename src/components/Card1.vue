<script setup>
</script>

<template>
  <div class="card-container">
    
    <div class="card" style="width: 12rem;">
      <div class="card-body">
        <img src="../assets/imag/bank.jpg" class="card-img-top" alt="up">
        <h5 class="card-title"> ↘️ 100 ➡️ 44</h5>
        <a href="https://www.lavanguardia.com/vida/20201022/484222012642/soy-esa-persona-que-vive-en-un-banco-cerca-de-tu-casa-tenia-una-vida-normal.html" target="_blank" class="btn" >Know More</a>
      </div>
    </div>
    
    <div class="card" style="width: 12rem;">
      <div class="card-body">
        <img src="../assets/imag/hisp.jpg" class="card-img-top" alt="up">
        <h5 class="card-title"> ↘️ 100 ➡️ 44</h5>
        <a href="https://almanatura.com/2016/02/importancia-los-centros-salud-desarrollo-rural/" target="_blank" class="btn" >Know More</a>
      </div>
    </div>
    
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
    <div class="card" style="width: 12rem;">
      <div class="card-body">
        <img src="../assets/imag/metro.png" class="card-img-top" alt="up">
        <h5 class="card-title"> ↘️ 100 ➡️ 44</h5>
        <a href="https://coes.cl/2018/10/01/prensa-como-influye-la-cercania-del-metro-en-el-valor-de-una-propiedad/" class="btn" target="_blank"  >Know More</a>
      </div>
    </div>
    
    
    <div class="card" style="width: 12rem;">
      <div class="card-body">
        <img src="../assets/imag/agua.png" class="card-img-top" alt="up">
        <h5 class="card-title"> ↘️ 100 ➡️ 44</h5>
        <a href="https://alegria-realestate.com/es/articles/life-in-spain/how-much-is-paid-per-month-for-basic-supplies-in-spain" class="btn" target="_blank" >Know More</a>
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
