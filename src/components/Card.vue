<script setup>
</script>

<template>
    <div>
        <div class="card" style="width: 18rem;">
            
            <img src="../assets/imag/" class="card-img-top" alt="up">

            <div class="card-body">
                <h5 class="card-title">school</h5>
                <p class="card-text">content.</p>
                <a href="#" class="btn">Know More</a>
             
            </div>
        </div>
        
    </div>
</template>

<style scoped>
.card {
  margin-top: 2em;
  padding: 1.5em 0.5em 0.5em;
  border-radius: 2em;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
.card img {
  width: 65%;
  border-radius: 50%;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.card .card-title {
  font-weight: 700;
  font-size: 1.5em;
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