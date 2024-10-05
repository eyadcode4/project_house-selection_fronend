<script>
export default {
  data() {
    return {
      currentTab: 'login',
      loginEmail: '',
      loginPassword: '',
      registerUsername: '',
      registerPassword: '',
      registerConfirmPassword: ''
    };
  },
  methods: {
    setTab(tab) {
      this.currentTab = tab;
    },
    isActiveTab(tab) {
      return this.currentTab === tab;
    },
    submitLogin() {
      console.log('Login with:', this.loginUser, this.loginPassword);
      this.$router.push('fullanswer');
    },
    submitRegister() {
      console.log('Register with:', this.registerUsername, this.registerPassword, this.registerConfirmPassword);
    }
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
             aria-controls="pills-login" :aria-selected="isActiveTab('login')">Login</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" :class="{ active: isActiveTab('register') }" @click="setTab('register')"
             id="tab-register" href="#pills-register" role="tab"
             aria-controls="pills-register" :aria-selected="isActiveTab('register')">Rigester</a>
        </li>
      </ul>

      <div class="tab-content">
        <div class="tab-pane fade" :class="{ 'show active': isActiveTab('login') }" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
          <form @submit.prevent="submitLogin">
            <div class="form-outline mb-4">
              <label class="form-label" for="loginName">User</label>
              <input type="user" v-model="loginName" id="loginName" class="form-control" />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="loginPassword">Password</label>
              <input type="password" v-model="loginPassword" id="loginPassword" class="form-control" />
            </div>

            <div class="button-container">
              <button type="submit" id="botonAcceder" class="btn btn-block mb-4">Enter</button>
            </div>
          </form>
        </div>

        <div class="tab-pane fade" :class="{ 'show active': isActiveTab('register') }" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
          <form @submit.prevent="submitRegister">
            <div class="form-outline mb-4">
              <label class="form-label" for="registerUsername">User</label>
              <input type="text" v-model="registerUsername" id="registerUsername" class="form-control" />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="registerPassword">Password</label>
              <input type="password" v-model="registerPassword" id="registerPassword" class="form-control" />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="registerConfirmPassword">Confirm Password</label>
              <input type="password" v-model="registerConfirmPassword" id="registerConfirmPassword" class="form-control" />
            </div>

            <div class="button-container">
              <button type="submit" id="botonRegistrar" class="btn btn-block mb-4">Rigester</button>
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
  --button-color: #382fde;
  --button-text-color: white;
  --active-tab-bg: #006508;
  --active-tab-color: white;
  --inactive-tab-bg: #e0e0e0;
  --inactive-tab-color: black;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: var(--main-bg-color);
  width: 100%;
  font-size: 25px;
  
  
}

.login-box {
  background-color: #D9D9D9;
  
  border: 1px solid var(--border-color);
  border-radius: 30px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Jomolhari", serif;
  color: #4c34d7;
  
}

#botonAcceder, #botonRegistrar {
  background-color: #251fe5;
  color: white;
  font-weight: bold;
  font-size: 25px;
  width: 40%;
  border-radius: 30px;
}

.nav-link {
  background-color: #8673f3;
  color: #3d0101;
  font-weight: bold;
  margin-bottom: 40px;
  border-radius: 30px;
}

.nav-link.active {
  background-color: #251fe5;
  color: white;
  
}

.form-control {
  border: solid 2px;
  border-color: #251fe5;
  
  
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  
}

</style>