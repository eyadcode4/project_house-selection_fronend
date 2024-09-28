<script>
import AdminView from '@/views/AdminView.vue';
import { ref } from "vue";
import { useRouter } from 'vue-router';

export default {
  setup() {
    const currentTab = ref('login');
    const loginEmail = ref('');
    const loginPassword = ref('');
    const router = useRouter();

    const setTab = (tab) => {
      currentTab.value = tab;
    };

    const isActiveTab = (tab) => {
      return currentTab.value === tab;
    };

    const submitLogin = () => {
      console.log('Login with:', loginEmail.value, loginPassword.value);
      router.push('AdminView');
    };

    return {
      currentTab,
      loginEmail,
      loginPassword,
      setTab,
      isActiveTab,
      submitLogin
    };
  }
};
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li class="nav-item" role="presentation">
          <a class="nav-link" :class="{ active: isActiveTab('login') }" @click="setTab('login')"
             id="tab-login" href="#pills-login" role="tab"
             aria-controls="pills-login" :aria-selected="isActiveTab('login')">Sign in</a>
        </li>
        
      </ul>

      <div class="tab-content">
        <div class="tab-pane fade" :class="{ 'show active': isActiveTab('login') }" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
          <form @submit.prevent="submitLogin">
            <div class="form-outline mb-4">
              <label class="form-label" for="loginName">UserName</label>
              <input type="user" v-model="loginName" id="loginName" class="form-control" />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="loginPassword">Password</label>
              <input type="password" v-model="loginPassword" id="loginPassword" class="form-control" />
            </div>

            <div class="button-container">
              <button @click="AdminView" type="submit" id="botonAcceder" class="btn btn-block mb-4">Submit</button>
            </div>
          </form>
        </div>

        
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Variables CSS globales */
:root {
  --main-bg-color: #f9f9f9;
  --border-color: #ccc;
  --button-color: #650000;
  --button-text-color: white;
  --active-tab-bg: #650000;
  --active-tab-color: white;
  --inactive-tab-bg: #e0e0e0;
  --inactive-tab-color: black;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--main-bg-color);
  width: 350px;
}

.login-box {
  background-color: #D9D9D9;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Jomolhari", serif;
  color: #650000;
  font-weight: bolder;
  font-size: x-large;
}

#botonAcceder {
  background-color: #514c9b;
  color: white;
  font-weight: bold;
  width: 40%;
  font-size: x-large;
}

.nav-link {
  background-color: #5d62c1;
  color: #3d0101;
  font-weight: bold;
  margin-bottom: 40px;
}

.nav-link.active {
  background-color: #9446d9;
  color: white;
}

.form-control {
  border: solid 3px;
  border-color: #1d0d9a;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  
}

</style>