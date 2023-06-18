<template>
  <header>
    <div :class="['header-inner', { transparent: transparent }]">
      <div class="header-left">
        <BubbleText text="StokerBR" class="stokerbr-text" element="h3" />
      </div>
      <LanguageSwitch />
      <div class="blur"></div>
    </div>
  </header>
</template>

<script setup>
onMounted(() => {
  window.addEventListener('scroll', onScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});

const transparent = ref(true);

function onScroll() {
  transparent.value = window.scrollY == 0;
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/stokerbr-text.scss';
@import '@/assets/scss/container.scss';

header {
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: fit-content;
  z-index: 100;

  .header-inner {
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
    margin: 15px;
    padding: 15px;
    border: 2px solid $primary-color;
    border-radius: 10px;
    box-shadow: $neon-box-shadow, inset $neon-box-shadow;
    // background-color: #25252500;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 600;
    transition: all 0.2s;
    background-color: rgb(37 37 37 / 80%);
    backdrop-filter: blur(10px);

    &.transparent {
      background-color: rgb(37 37 37 / 0%);
      backdrop-filter: blur(0px);
    }

    /* .blur {
      backdrop-filter: blur(10px);
      position: absolute;
      height: calc(100% + 10px);
      // height: 100%;
      width: calc(100% + 10px);
      // width: 100%;
      z-index: -1;
    } */

    /* &::before {
      content: "";
      position: absolute;
      z-index: -1;
      backdrop-filter: blur(10px);
    } */

    .header-left {
      margin-right: auto;

      .stokerbr-text {
        cursor: pointer;
      }
    }

    @media (min-width: 768px) {
      max-width: 750px;
    }
    @media (min-width: 992px) {
      max-width: 970px;
    }
    @media (min-width: 1200px) {
      max-width: 1170px;
    }
  }
}
</style>
