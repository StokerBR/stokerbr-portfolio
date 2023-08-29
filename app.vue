<template>
  <SplashScreen :isLoading="isLoading" v-if="isLoading" />
  <div
    class="wrapper"
    v-if="!isLoading"
    v-bind:style="{ '--mouse-x': mouse.x + 'px', '--mouse-y': mouse.y + 'px' }"
  >
    <Header />
    <div class="introduction-wrapper">
      <IntroductionSection />
      <p class="soon">{{ $t('under_construction') }}</p>
    </div>
    <!-- <div class="content-wrapper container">
      <div class="placeholder">
        <h3>Teste</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cumque
          quia aliquid fuga eaque libero aperiam fugiat obcaecati id enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          similique iusto. Velit facere minima temporibus officia veritatis
          inventore cupiditate quibusdam vero enim accusantium placeat ut
          exercitationem eum sunt, deserunt neque nam laudantium rem fugit
          libero aliquid, adipisci laboriosam! Mollitia, eum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          similique iusto. Velit facere minima temporibus officia veritatis
          inventore cupiditate quibusdam vero enim accusantium placeat ut
          exercitationem eum sunt, deserunt neque nam laudantium rem fugit
          libero aliquid, adipisci laboriosam! Mollitia, eum.
        </p>
        <br /><br /><br />
      </div>
    </div> -->
  </div>
</template>

<script setup>
const isLoading = ref(false);
const mouse = ref({ x: 0, y: 0 });

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);

  window.addEventListener('mousemove', (e) => {
    mouse.value.x = e.clientX;
    mouse.value.y = e.clientY;
  });
});
</script>

<style lang="scss">
html,
body,
#__nuxt,
.wrapper {
  width: 100%;
  height: 100%;
  font-family: 'Mona-Sans', sans-serif;
  color: $text-color;
  position: relative;
  // overflow: hidden;
}

.wrapper {
  // "Shimmer" effect
  &::before {
    border-radius: inherit;
    content: '';
    background: color-mix(in srgb, $primary-color, transparent 50%)
      url('~/assets/images/grain.png');
    height: 100%;
    opacity: 0;
    position: absolute;
    transition: opacity 500ms;
    width: 100%;
    pointer-events: none;
    z-index: 0;
    background-size: 120px, 100%;
    mix-blend-mode: screen;
    background-blend-mode: screen;
    -webkit-mask-image: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      rgb(0, 0, 0),
      transparent 90%
    );
    mask-image: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      rgb(0, 0, 0),
      transparent 90%
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
  // height: 100vh;
  height: 100%;
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
</style>
