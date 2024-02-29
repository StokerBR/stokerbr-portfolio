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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
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
  padding-bottom: 60px;

  > .container {
    max-width: 900px;
  }
}
</style>
