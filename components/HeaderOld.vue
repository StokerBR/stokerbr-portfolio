<template>
  <header
    :class="{
      /* hidden: isHidden */
    }"
  >
    <div class="header-inner">
      <div class="header-left">
        <BubbleText
          ref="bubbleText"
          text="StokerBR"
          class="stokerbr-text"
          element="h3"
          :startupEffect="true"
          @click="scrollToTop"
        />
      </div>
      <LanguageSwitch />
      <div class="blur"></div>
    </div>
  </header>
</template>

<script setup>
const bubbleText = ref();
const isTransparent = ref(true);
const isHidden = ref(false);
let lastScrollY = 0;

onMounted(() => {
  // bubbleText.value.runWaveEffect();

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
  isTransparent.value = window.scrollY == 0;

  // Hides the header when scrolling down and shows it when scrolling up
  if (window.scrollY > lastScrollY) {
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
@import '@/assets/scss/components/stokerbr-text.scss';

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
    margin: 15px;
    padding: 15px;
    border: 1px solid $primary-color;
    border-radius: 5px;
    // box-shadow: $neon-box-shadow, inset $neon-box-shadow;
    // background-color: $background-color;
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    transition: all 0.2s;
    background-color: rgba(0, 30, 64, 0.85);
    backdrop-filter: blur(10px);

    .header-left {
      margin-right: auto;

      .stokerbr-text {
        font-size: 28px;
        cursor: pointer;
        user-select: none;
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
