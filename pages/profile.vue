<template lang="html">
  <form class="profile" @submit.prevent="updateInfo">
    <div class="profile__body">
      <div class="profile__input-group">
        <BaseInput :label="'Имя'" v-model="user.firstName" />
        <BaseInput :label="'Фамилия'" v-model="user.lastName" />
      </div>
      <div class="profile__input-group">
        <BaseInput :label="'Сменить логин'" v-model="user.login" />
        <BaseInput :label="'Сменить пароль'" v-model="user.password" />
      </div>
    </div>
    <button type="submit" name="button" class="profile__button">
      Сохранить
    </button>
  </form>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      user: {}
    };
  },
  middleware: 'authenticated',
  methods: {
    updateInfo() {
      this.$store.commit("user/UPDATE_USER_INFO", this.user);
      localStorage.setItem('user', JSON.stringify(this.user))
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
  .profile{
    &__body {
      flex-direction: column;
    }
    &__button {
      max-width: 100%;
      width: 100%;
    }
  }
}
</style>
