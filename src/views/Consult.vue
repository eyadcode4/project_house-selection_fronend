<script setup>
import Button3 from "@/components/Button3.vue";
import Form from "../components/Form.vue";
</script>

<template>
  <main>
    <div class="content">
      <Form></Form>
      <Button3></Button3>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: #fae1e1;
  height: 837px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  display: flex;
 
  align-items: center;
  gap: 20px; /* Espacio entre el formulario y el botón */
}
</style>
