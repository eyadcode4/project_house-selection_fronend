<script setup></script>
<template>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <RouterLink to="/"><a class="nav-link" href="#">Home</a></RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/consult"
        ><a class="nav-link" href="#">Consult</a></RouterLink
      >
    </li>

    <li class="nav-item">
      <RouterLink to="/edicion">
        <a class="nav-link" href="#">Consultas</a></RouterLink
      >
    </li>
  </ul>
</template>
<style scoped>
ul {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2fa522;
}
a {
  color: white;
  font-weight: bolder;
  text-decoration: none;
}
a:hover {
  color: #df8989;
}
a:link,
:visited {
  color: #fff;
}
</style>
