<template lang="html">
  <div class="icon-wrapper">
    <svg :class="iconClass" :width="width" :height="height">
      <use v-bind="{ 'xlink:href': '/' + name + '.svg#' + name }" />
    </svg>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    iconClass: {
      type: String
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
  },
};
</script>

<style lang="scss">
.icon-wrapper {
  display: flex;
  align-items: center;
}

</style>
