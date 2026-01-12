<template>
  <section id="projects">
    <div class="content-wrapper container">
      <SectionHeading :text="$t('sections.projects.title')" />
      <div class="projects">
        <ProjectCard
          v-for="(project, index) in featuredProjects"
          :key="index"
          :project="projects[project]"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import projects from '@/data/projects.json';

const featuredProjects = [
  'calcponto',
  'calcponto',
  'calcponto',
  'calcponto',
  'calcponto',
];
</script>

<style scoped lang="scss">
.projects {
  --cols: 2;
  --gap: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);

  @media (max-width: 991px) {
    --cols: 2;
  }
  @media (max-width: 767px) {
    --cols: 1;
  }

  .project-wrapper {
    flex-basis: calc(
      (100% / var(--cols)) - ((var(--gap) / var(--cols)) * (var(--cols) - 1))
    );
  }
}
</style>
