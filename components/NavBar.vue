<template lang="html">
  <section class="navbar" :class="openMenu ? '' : 'navbar--close'">
    <div class="navbar__controls">
      <div class="navbar__logo">
        <img src="~/assets/logo.svg" alt="" v-if="openMenu || mobile" />
        <img src="~/assets/logo-word.svg" v-else-if="!mobile" alt="" />
      </div>
      <button
        type="button"
        class="navbar__toggle"
        name="button"
        v-if="!mobile"
        @click="openMenu = !openMenu"
      >
        <span :class="openMenu ? 'arrow__open' : 'arrow__close'"></span>
      </button>
      <button
        type="button"
        name="button"
        class="hamburger-mobile"
        @click="openMenu = !openMenu"
        v-if="mobile"
      >
        <span class="line"></span> <span class="line"></span>
      </button>
    </div>
    <div class="navbar__links-group">
      <div class="navbar__controls--mobile" v-if="mobile">
        <button
          type="button"
          name="button"
          class="hamburger-mobile--close"
          @click="openMenu = !openMenu"
          v-if="mobile"
        >
          <span class="line"></span> <span class="line"></span>
        </button>
        <div class="navbar__logo">
          <img src="~/assets/logo.svg" alt="" />
        </div>
      </div>
      <NuxtLink
        :to="{ name: 'profile', params: { title: 'Мой профиль' } }"
        class="navbar__link"
      >
        <BaseIcon :name="'work'" class="navbar__icon" />
        <span class="navbar__link-text">Мой профиль</span>
      </NuxtLink>
      <NuxtLink
        :to="{ name: 'todos', params: { title: 'Список задач' } }"
        class="navbar__link"
      >
        <BaseIcon class="navbar__icon" :name="'product'" />
        <span class="navbar__link-text">Список задач</span>
      </NuxtLink>
      <NuxtLink
        :to="{ name: 'statistics', params: { title: 'Статистика' } }"
        class="navbar__link"
      >
        <BaseIcon class="navbar__icon" :name="'question'" />
        <span class="navbar__link-text">Статистика</span>
      </NuxtLink>
      <button type="button" name="button" class="exit__button" @click="logout()">
        <BaseIcon :name="'exit'" /> <span class="exit__text">Выйти</span>
      </button>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      openMenu: true,
      mobile: false
    };
  },
  created() {
    if (window.innerWidth <= 576) {
      this.mobile = true;
      this.openMenu = false;
    }
  },
  methods: {
    ...mapMutations({
      logout: 'user/LOGOUT'
    })
  }
};
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active {
  color: #bd0d22 !important;
  fill: #bd0d22;
}
.navbar--close {
  max-width: 150px !important;
  transition: all 0.4s;
  .navbar__link-text {
    display: none;
  }
}
.navbar {
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-left: 56px;
  position: relative;
  transition: max-width 0.4s;
  &__link {
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    color: #303136;
    text-decoration: none;
    font-weight: 500;
    &-text {
      display: block;
    }
  }
  &__logo {
    margin-bottom: 40px;
    margin-top: 24px;
    height: 40px;
    img {
      height: 100%;
    }
  }
  &__icon {
    margin-right: 8px;
  }
  &__toggle {
    position: absolute;
    right: 0;
    top: 12px;
    width: 40px;
    height: 40px;
    transform: translateX(50%);
    background: #ffffff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  }
}
.arrow {
  &__open {
    width: 8px;
    height: 8px;
    display: block;
    border-bottom: 2px solid #6fbc9a;
    border-right: 2px solid #6fbc9a;
    transform: rotate(135deg);
  }
  &__close {
    width: 8px;
    height: 8px;
    display: block;
    border-bottom: 2px solid #6fbc9a;
    border-right: 2px solid #6fbc9a;
    transform: rotate(-45deg);
  }
}
.burger {
  width: 20px;
  height: 6px;
  border-top: 2px solid #bd0d22;
  border-bottom: 2px solid #bd0d22;
}
@media screen and (max-width: 576px) {
  .hamburger-mobile,
  .hamburger-mobile--close {
    display: flex;
    flex-direction: column;
    margin-left: 22px;
    margin-right: 46px;
    background: none;
    .line {
      height: 2px;
      width: 20px;
      background-color: #bd0d22;
      &:first-child {
        margin-bottom: 6px;
      }
    }
  }
  .hamburger-mobile--close {
    position: relative;
    margin-left: 0;
    .line {
      height: 2px;
      width: 20px;
      background-color: #bd0d22;
      &:first-child {
        transform: rotate(45deg);
        position: absolute;
        left: 0;
      }
      &:last-child {
        transform: rotate(-45deg);
        position: absolute;
        left: 0;
      }
    }
  }
  .navbar {
    position: absolute;
    max-width: 100%;
    padding-left: 0;
    &__controls--mobile {
      display: flex;
      background: white;
      width: 100%;
      height: 64px;
      margin-bottom: 48px;
      align-items: center;
      justify-content: flex-start;
      .navbar {
        &__toggle--mobile {
          height: 20px;
          width: 20px;
          margin-left: 0;
          margin-right: 34px;
        }
        &__logo {
          height: 20px;
        }
      }
    }
    &__logo {
      margin: 0;
      height: 20px;
    }
    &__toggle {
      position: static;
      height: 20px;
      margin-left: 22px;
      margin-right: 46px;
    }
    &__controls {
      position: fixed;
      background: white;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: row-reverse;
      height: 64px;
    }
    &__links-group {
      position: fixed;
      z-index: 2;
      background: white;
      height: 100vh;
      width: 295px;
      padding-left: 23px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    &--close {
      .navbar__links-group {
        display: none;
      }
    }
  }
}
.exit {
  &__button {
    display: flex;
    background: none;
    align-items: center;
    color: #6f849c;
    position: absolute;
    bottom: 48px;
    cursor: pointer;
  }
  &__text {
    display: block;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-left: 8px;
  }
}
</style>
