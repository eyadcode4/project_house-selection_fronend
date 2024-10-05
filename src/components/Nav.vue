<script setup></script>
<template>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <RouterLink to="/"><a class="nav-link" href="#">Home</a></RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/consult"
        ><a class="nav-link" href="#">Getting advice</a></RouterLink
      >
    </li>

    <li class="nav-item">
      <RouterLink to="/edicion">
        <a class="nav-link" href="#">Consult List</a></RouterLink
      >
    </li>
    <li class="nav-item">
      <RouterLink to="/login">
        <a class="nav-link" href="#">Login</a></RouterLink
      >
    </li>
  </ul>
</template>
<style scoped>
ul {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2fa522;
  margin: 0;
  padding: 0;
}
li {
  height: 100%; 
  display: flex;
  align-items: center; 
}

a {
  color: white;
  font-size: 25px;
  font-weight: bold;
  
  text-decoration: none;
  display: flex;
  align-items: center; 
  height: 100%; 
  padding: 0 30px; 
}
a:hover {
  color: #3b13b5;
}
a:link,
:visited {
  color: #f0e6e6;
}
</style>
