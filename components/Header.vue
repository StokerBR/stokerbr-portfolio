<template>
  <header
    :class="{
      hidden: isHidden,
      transparent: isTransparent,
    }"
  >
    <div class="header-inner">
      <div class="header-left">
        <div class="logo" @click="scrollToTop">H</div>
      </div>
      <LanguageSwitch />
      <div class="blur"></div>
    </div>
  </header>
</template>

<script setup>
const isTransparent = ref(true);
const isHidden = ref(false);
let lastScrollY = 0;

onMounted(() => {
  lastScrollY = window.scrollY;
  handleScroll();
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Handles the scroll event
function handleScroll() {
  // Makes the header background transparent when at the top of the page
  isTransparent.value = window.scrollY <= 50;

  // Hides the header when scrolling down and shows it when scrolling up
  if (window.scrollY > lastScrollY && window.scrollY >= 50) {
    isHidden.value = true;
  } else {
    isHidden.value = false;
  }
  lastScrollY = window.scrollY;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables.scss" as *;

header {
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: fit-content;
  z-index: 100;
  transition: all 0.2s;

  &.hidden {
    transform: translateY(-100%);
  }

  .header-inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100%;
    // margin: 15px;
    padding: 15px;
    // border: 1px solid $primary-color;
    // border-radius: 5px;
    // box-shadow: $neon-box-shadow, inset $neon-box-shadow;
    // background-color: $background-color;
    // box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.2);
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    transition: all 0.2s;
    background-color: rgba($background-color, 0.8);
    backdrop-filter: blur(10px);

    .header-left {
      height: 100%;
      position: relative;
      margin-right: auto;

      .logo {
        aspect-ratio: 1;
        height: 100%;
        background-color: rgba($dark-color, 0.9);
        border: 1px solid $primary-color;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.1s;
        cursor: pointer;
        color: $primary-color;
        font-stretch: 125%;
        font-weight: 900;
        font-size: 28px;

        &:hover {
          background-color: rgba($secondary-color, 0.9);
        }
      }

      /* .stokerbr-text {
        font-size: 28px;
        cursor: pointer;
        user-select: none;
      } */
    }

    /* @media (min-width: 768px) {
      max-width: 750px;
    }
    @media (min-width: 992px) {
      max-width: 970px;
    }
    @media (min-width: 1200px) {
      max-width: 1170px;
    } */
  }

  &.transparent .header-inner {
    background-color: unset;
  }
}
</style>
