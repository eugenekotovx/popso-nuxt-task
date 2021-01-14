<template lang="html">
  <div class="base-input__wrapper">
    <label class="base-input__label" v-if="label">
      {{ label }}
    </label>
    <input
      class="base-input"
      :value="value"
      @input="updateValue"
      v-on="listeners"
      :v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      defaul: "",
    },
    value: [String, Number],
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      };
    },
  },
};
</script>

<style lang="scss">
.error-message {
  font-size: 12px;
  opacity: .5;
  color: #fa4a0c;
}
.base-input {
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
  &__wrapper {
    display: flex;
    flex-direction: column;
    max-width: 360px;
    width: 100%;
    border: none;
    margin-top: 24px;
  }
  &__label {
    color: #6f849c;
  }
}
.error {
  .base-input {
    border-bottom: 1px solid #D6073D ;
  }
}
</style>
