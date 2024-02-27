<template>
  <transition name="fade">
    <SplashScreen :showSplash="showSplash" v-if="showSplash" />
    <div
      v-else
      class="wrapper"
      :style="{ '--mouse-x': mouse.x + 'px', '--mouse-y': mouse.y + 'px' }"
    >
      <Header />
      <div class="introduction-wrapper">
        <IntroductionSection />
        <p class="soon">{{ $t('under_construction') }}</p>
      </div>
      <AboutSection />
    </div>
  </transition>
</template>

<script setup>
const showSplash = ref(process.env.NODE_ENV == 'production');
const mouse = ref({ x: 0, y: 0 });

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false;
  }, 2000);

  let lastY = 0;

  window.addEventListener('mousemove', (e) => {
    mouse.value.x = e.clientX;
    mouse.value.y = e.clientY + window.scrollY;
    lastY = e.clientY;
  });
  window.addEventListener('scroll', (e) => {
    if (window.scrollY) {
      mouse.value.y = lastY + window.scrollY;
    }
  });
});
</script>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/consola-mono');

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

html,
body,
#__nuxt,
.wrapper {
  width: 100%;
  min-height: 100%;
  font-family: 'Mona-Sans', sans-serif;
  color: $text-color;
  position: relative;
  // overflow: hidden;
}

.wrapper {
  // Cursor glow effect
  &::before {
    border-radius: inherit;
    content: '';
    background: color-mix(in srgb, $primary-color, transparent 50%)
      url('~/assets/images/grain.png');
    min-height: 100%;
    opacity: 0;
    position: absolute;
    transition: opacity 500ms;
    width: 100%;
    pointer-events: none;
    z-index: 0;
    background-size: 120px, 100%;
    // mix-blend-mode: screen;
    // background-blend-mode: screen;
    /* -webkit-mask-image: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      rgb(0, 0, 0),
      transparent 90%
    ); */
    mask-image: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      rgb(0, 0, 0),
      transparent 100%
    );
  }

  @media (hover: hover) and (pointer: fine) {
    // Only applies to devices that support hover
    &:hover::before {
      opacity: 0.1;
    }
  }
}

body {
  margin: 0;
  background-color: $background-color;
}

.introduction-wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .soon {
    font-size: 12px;
    font-weight: 200;
    text-align: center;
    position: absolute;
    bottom: 50px;
  }
}

section {
  padding-bottom: 40px;
}
</style>
