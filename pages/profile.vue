<template lang="html">
  <form class="profile" @submit.prevent="updateInfo">
    <div class="profile__body">
      <div class="profile__input-group">
        <BaseInput
          :label="'Имя'"
          v-model="user.firstName"
          :class="{ error: $v.user.firstName.$error }"
          @blur="$v.user.firstName.$touch()"
        /><span class="error-message" v-if="$v.user.firstName.$error"
          >Это поле необходимо заполнить</span
        >
        <BaseInput
          :label="'Фамилия'"
          v-model="user.lastName"
          :class="{ error: $v.user.lastName.$error }"
          @blur="$v.user.lastName.$touch()"
        /><span class="error-message" v-if="$v.user.lastName.$error"
          >Это поле необходимо заполнить</span
        >
      </div>
      <div class="profile__input-group">
        <BaseInput
          :label="'Сменить логин'"
          v-model="user.login"
          :class="{ error: $v.user.login.$error }"
          @blur="$v.user.login.$touch()"
        />
        <span class="error-message" v-if="$v.user.login.$error"
          >Это поле необходимо заполнить</span
        >
        <BaseInput
          :label="'Сменить пароль'"
          v-model="user.password"
          :class="{ error: $v.user.password.$error }"
          @blur="$v.user.password.$touch()"
        />
        <span class="error-message" v-if="$v.user.password.$error"
          >Это поле необходимо заполнить</span
        >
      </div>
    </div>
    <button type="submit" name="button" class="profile__button">
      Сохранить
    </button>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapState } from "vuex";
export default {
  data() {
    return {
      user: {}
    };
  },
  validations: {
    user: {
      password: { required },
      login: { required },
      lastName: { required },
      firstName: { required }
    }
  },
  middleware: "authenticated",
  methods: {
    updateInfo() {
      if (!this.$v.$invalid) {
        this.$store.commit("user/UPDATE_USER_INFO", this.user);
        localStorage.setItem("user", JSON.stringify(this.user));
      }
    }
  },
  created() {
    this.user = Object.assign({}, this.$store.getters["user/user"]);
  }
};
</script>

<style lang="scss" scoped>
.profile {
  &__body {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  &__input-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 360px;
    width: 100%;
    border: none;
    margin-top: 24px;
  }
  &__input {
    border: none;
    outline: none;
    width: 100%;
    margin-top: 8px;
    font-size: 14px;
    padding-bottom: 8px;
    border-bottom: 1px solid #eff1f9;
    &:focus {
      border-bottom: 1px solid #6f849c;
    }
    &-label {
      color: #6f849c;
    }
    &-group {
      width: 100%;
    }
  }
  &__button {
    margin-left: auto;
    margin-right: 0;
    margin-top: 29px;
    display: block;
    background: #d6073d;
    border-radius: 10px;
    height: 44px;
    color: white;
    padding: 12px 56px;
    font-size: 16px;
    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 576px) {
  .profile {
    &__body {
      flex-direction: column;
    }
    &__button {
      max-width: 100%;
      width: 100%;
    }
  }
}

.error {
  &:focus {
    border-bottom: 1px solid #bd0d22;
  }
  &-message {
    color: #bd0d22;
  }
}
</style>
