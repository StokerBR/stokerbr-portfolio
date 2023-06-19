<template>
  <SplashScreen :isLoading="isLoading" />
  <div class="wrapper" v-if="!isLoading">
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
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
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

body {
  margin: 0;
  // background-color: $background-color;
  // background-color: #001e40;
  background-color: #001329;
}

.introduction-wrapper {
  // background: linear-gradient(135deg, $background-color, #101010);
  // background: linear-gradient(0deg, $background-color, #101010);
  // background: linear-gradient(270deg, $background-color, #101010);
  // height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  // border-bottom: 2px solid $primary-color;
  // box-shadow: $neon-box-shadow;

  .soon {
    font-size: 12px;
    font-weight: 200;
    text-align: center;
    position: absolute;
    bottom: 50px;
  }
}
</style>
