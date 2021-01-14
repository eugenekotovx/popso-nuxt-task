<template>
  <div class="wrapper">
    <NavBar />
    <div class="layout__container">
      <h1 class="layout__header"> {{ title}} </h1>
      <div class="layout__wrapper">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      title() {
        return this.$route.params.title
      }
    }
  }
</script>

<style lang="scss">

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.wrapper {
  display: flex;
}

.layout {
  &__container {
    width: 100%;
    height: 100vh;
    background: #eff1f9;
    padding: 40px;
    max-height: 100vh;
  }
  &__wrapper {
    background: white;
    border-radius: 10px;
    padding: 30px 40px;
  }
  &__header {
    margin-bottom: 25px;
    font-size: 20px;
    line-height: 32px;
  }
}
@media screen and (max-width: 576px) {
  .layout {
    &__header {
     margin-top: 24px;
    }
    &__container {
      width: 100%;
      height: 100%;

      background: #eff1f9;
      padding: 0 16px;
      max-height: 100%;
      margin-top: 64px;
      min-height: 100vh;
      padding-bottom: 20px;
    }
  }
}
</style>
