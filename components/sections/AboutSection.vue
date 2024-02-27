<template>
  <section>
    <div class="content-wrapper container">
      <div class="about">
        <h3>Sobre</h3>
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
      <div class="skills-wrapper">
        <Skills />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.content-wrapper {
  display: flex;

  > div {
    flex: 50%;
  }

  .skills-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-wrap: wrap;
  }
}
</style>
