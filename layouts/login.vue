<template lang="html">
  <div class="form__container">
    <div class="navbar__logo">
      <img src="~/assets/logo.svg" alt="" />
    </div>
    <form class="form" @submit.prevent>
      <input
        type="text"
        name=""
        placeholder="Логин"
        class="form__input"
        v-model="info.login"
      />
      <input
        type="text"
        name=""
        value=""
        placeholder="Пароль"
        class="form__input"
        v-model="info.password"
      />
      <button
        type="submit"
        class="form__button"
        name="button"
        v-if="!wasAuth"
        @click="register()"
      >
        Регистрация
      </button>
      <button
        type="submit"
        class="form__button"
        name="button"
        v-else
        @click="loginUser()"
      >
        Войти
      </button>
    </form>
    <span v-if="error">Неправильный логин или пароль</span>
  </div>
</template>

<script>
const randomId = () => {
  return Math.floor(Math.random() * 99 + 1);
};

import { mapActions } from "vuex";

export default {
  data() {
    return {
      info: {
        login: "",
        password: "",
        id: randomId()
      },
      wasAuth: false,
      error: false
    };
  },
  mounted() {
      this.wasAuth = localStorage.getItem("wasAuth");
  },
  methods: {
    enter() {
      this.$router.push({ path: "/profile", params: { title: "Мой профиль" } });
    },
    ...mapActions({ registerUser: "user/registerUser", login: "user/login"}),
    async register() {
      await this.registerUser(this.info);
      this.enter()
    },
    async loginUser() {
       await this.login(this.info)
       if (this.$store.state.user.auth == true) {
          this.enter()
       } else {
          this.error = true
       }
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  &__input {
    padding: 12px 20px;
    margin-bottom: 16px;
    border: 1px solid #cbcbcb;
    border-radius: 10px;
  }
  &__container {
    display: flex;
    align-items: center;
    margin-top: 139px;
    height: 100vh;
    flex-direction: column;
  }
  &__button {
    background: #d6073d;
    border-radius: 10px;
    height: 44px;
    color: white;
    outline: none;
    border: none;
  }
}
</style>
