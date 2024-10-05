<script setup></script>
<template>
  <main>
    <RouterLink to="/Card1">
      <a class="btn btn-primary btn-lg" href="#" btn-l role="button"
        >house 1</a
      ></RouterLink
    >
    <RouterLink to="/Card2">
      <a class="btn btn-primary btn-lg" href="#" btn-l role="button"
        >house 2</a
      ></RouterLink
    >
    <RouterLink to="/Card3">
      <a class="btn btn-primary btn-lg" href="#" btn-l role="button"
        >house 3</a
      ></RouterLink
    >
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 87px;
}

a {
  background-color: #2147ce;
  padding: 5px 5px;
  border-radius: 30px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 26px;
  margin: 20px;
}
</style>
