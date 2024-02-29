<template>
  <section id="about">
    <div class="content-wrapper container">
      <div class="about">
        <SectionHeading :text="$t('sections.about.title')" />
        <div v-html="$t('sections.about.content')" />
      </div>
      <div class="skills-wrapper">
        <SectionHeading :text="$t('sections.skills.title')" :secondary="true" />
        <Skills />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.content-wrapper {
  display: flex;
  row-gap: 50px;
  column-gap: 50px;

  .skills-wrapper {
    // margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-wrap: wrap;

    .skills-wrapper {
      flex-grow: 1;
    }
  }
}
</style>
