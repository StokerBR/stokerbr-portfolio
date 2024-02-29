<template>
  <component
    :is="secondary ? 'h3' : 'h2'"
    :class="['section-heading', { secondary: secondary }]"
    >{{ text }}</component
  >
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  secondary: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.section-heading {
  display: flex;
  align-items: center;
  font-size: 24px;
  margin: 10px 0px 30px;
  white-space: nowrap;
  width: 100%;

  &.secondary {
    font-size: 20px;
    color: $text-color;
  }

  &:not(.secondary)::before {
    position: relative;
    bottom: 1px;
    counter-increment: section 1;
    content: '0' counter(section) '.';
    margin-right: 10px;
    color: $primary-color;
    font-family: $font-family-mono;
    font-size: 24px;
    font-weight: 400;
  }

  &:not(.secondary)::after,
  &.secondary::before {
    content: '';
    display: block;
    position: relative;
    // width: 300px;
    width: 100%;
    height: 1px;
    background-color: $dark-color;
  }

  &:not(.secondary)::after {
    margin-left: 20px;
  }

  &.secondary::before {
    margin-right: 20px;
  }
}
</style>
