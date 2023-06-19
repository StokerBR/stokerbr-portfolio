<template>
  <div class="languages">
    <img
      src="~/assets/icons/us_flag.svg"
      class="flag"
      title="EN-US"
      @click="checked = false"
    />
    <input
      type="checkbox"
      :title="$t('change_language')"
      class="language-switch"
      v-model="checked"
    />
    <img
      src="~/assets/icons/br_flag.svg"
      class="flag"
      title="PT-BR"
      @click="checked = true"
    />
  </div>
</template>

<script setup>
const { locale } = useI18n();
const checked = ref(locale.value == 'pt');

watch(checked, (value) => {
  if (value) {
    locale.value = 'pt';
  } else {
    locale.value = 'en';
  }
});
</script>

<style lang="scss" scoped>
.languages {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 5px;
  user-select: none;

  img.flag {
    height: 20px;
    border-radius: 2px;
    // border: 2px solid $primary-color;
    cursor: pointer;
  }

  .language-switch {
    height: 24px;
    width: 40px;
    border-radius: 16px;
    display: inline-block;
    position: relative;
    margin: 0;
    border: 2px solid $primary-color;
    background: linear-gradient(180deg, #001e40, #001329);
    transition: all 0.2s ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    // box-shadow: 0px 0px 10px $primary-color, inset 0px 0px 10px $primary-color;

    &:focus {
      outline: 0;
    }

    &:after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: white;
      box-shadow: 0 1px 2px rgba(44, 44, 44, 0.2);
      transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
    }

    &:checked:after {
      transform: translatex(16px);
    }
  }
}
</style>
