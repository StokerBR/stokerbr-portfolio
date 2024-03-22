<template>
  <div class="skills">
    <div
      v-for="(skill, index) in skills"
      :key="index"
      :class="`size-${skill.size}`"
      :title="technology(skill).name"
    >
      <a :href="skill.link" target="_blank">
        <img :src="images[technology(skill).icon]" :alt="skill.name" />
      </a>
    </div>
  </div>
</template>

<script setup>
import skills from '@/data/skills.json';
import technologies from '@/data/technologies.json';
import { getTechnologiesImages } from '~/assets/utils/functions';

const images = getTechnologiesImages();

// Get the technology object from the skill object
function technology(skill) {
  return technologies[skill.technology];
}
</script>

<style lang="scss" scoped>
.skills {
  display: grid;
  grid-template-columns: repeat(10, 1fr);

  @media (max-width: 991px) {
    grid-template-columns: repeat(8, 1fr);
  }
  @media (max-width: 380px) {
    grid-template-columns: repeat(7, 1fr);
  }
  @media (max-width: 355px) {
    grid-template-columns: repeat(5, 1fr);
  }

  border-radius: 5px;

  width: fit-content;
  // gap: 5px;
  grid-auto-flow: dense;

  & > {
    div {
      // border: 2px solid $secondary-color;
      border-radius: 5px;
      background-color: $dark-color;
      padding: 5px;
      width: 20px;
      height: 20px;
      margin: 5px;
      transition: all 200ms linear;

      img {
        height: 100%;
        width: 100%;
      }

      &:hover {
        background-color: $secondary-color;
      }
    }

    .size-2 {
      width: 60px;
      height: 60px;
      grid-column-end: span 2;
      grid-row-end: span 2;
    }

    .size-3 {
      width: 100px;
      height: 100px;
      grid-column-end: span 3;
      grid-row-end: span 3;
    }
  }
}
</style>
