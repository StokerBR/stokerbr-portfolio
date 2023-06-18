<template>
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
        exercitationem eum sunt, deserunt neque nam laudantium rem fugit libero
        aliquid, adipisci laboriosam! Mollitia, eum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
        similique iusto. Velit facere minima temporibus officia veritatis
        inventore cupiditate quibusdam vero enim accusantium placeat ut
        exercitationem eum sunt, deserunt neque nam laudantium rem fugit libero
        aliquid, adipisci laboriosam! Mollitia, eum.
      </p>
    </div>
  </div> -->
</template>

<script setup></script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/container.scss';
@import url('https://fonts.cdnfonts.com/css/mona-sans');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css');

html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
  font-family: 'Mona-Sans', sans-serif;
  color: white;
  position: relative;
}

body {
  margin: 0;
  background-color: #252525;
}

.introduction-wrapper {
  background: linear-gradient(135deg, #252525, #101010);
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
