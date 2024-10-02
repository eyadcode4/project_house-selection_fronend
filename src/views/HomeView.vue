<script setup>
import MainHome from "@/components/MainHome.vue";
import HealthHome from "@/components/HealthHome.vue";
import ButtonHome from "@/components/ButtonHome.vue";
</script>

<template>
  <main>
    <div id="buttonHome">
      <ButtonHome></ButtonHome>
    </div>
    
    <div id="maintext">
      <MainHome></MainHome>
    </div>
    <div id="mainphoto">
      <HealthHome></HealthHome>
    </div>
    
  </main>
</template>
<style scoped>
#maintext {
  float: left;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b8ec37;
}
#mainphoto {
  float: right;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b8ec37;
}
#buttonHome {
  background-color: #b8ec37;
}
@media (max-width: 768px) {
  main {
    display: flex;
    flex-direction: column;
  }
  #maintext {
    width: 100%;
  }
  #mainphoto {
    width: 100%;
  }
}
</style>
