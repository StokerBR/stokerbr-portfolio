<template>
  <div
    class="project-wrapper"
    ref="$wrapper"
    :style="{ '--x': mouse.x + 'px', '--y': mouse.y + 'px' }"
  >
    <div class="card">
      <div class="project-image" v-if="imgsLength > 0">
        <NuxtImg
          :src="`images/projects/${props.project.images[0]}`"
          alt="Project Image"
          loading="lazy"
          width="854"
          height="480"
          placeholder
        />
      </div>
      <div class="content">
        <h4>{{ props.project.name }}</h4>
        <p class="text" v-html="props.project.description[locale]"></p>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { getProjectsImages } from '~/assets/utils/functions';
const { locale } = useI18n();
const props = defineProps({
  project: { type: Object, required: true },
});

const imgsLength = props.project.images.length;

// const images = getProjectsImages();
/* const mainImg =
  imgsLength > 0
    ? Object.values(images).find((img) => img.endsWith(props.project.images[0]))
    : null; */

const mouse = ref({ x: -1000, y: -1000 });
const $wrapper = ref(null);

onMounted(() => {
  let lastY = 0;

  window.addEventListener('mousemove', (e) => {
    if ($wrapper.value) {
      let rect = $wrapper.value.getBoundingClientRect();
      mouse.value.x = e.clientX - rect.left;
      mouse.value.y = e.clientY - rect.top;
      lastY = e.clientY;
    }
  });
  window.addEventListener('scroll', (e) => {
    if ($wrapper.value) {
      let rect = $wrapper.value.getBoundingClientRect();
      mouse.value.y = lastY - rect.top;
    }
  });
});
</script>

<style lang="scss" scoped>
.project-wrapper {
  position: relative;

  .card {
    position: relative;
    width: 100%;
    height: 100%;
    // background-color: $dark-color;
    background-color: rgba($dark-color, 0.9);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid rgba($primary-color, 0.1);
    overflow: hidden;

    .project-image {
      aspect-ratio: 16/9;

      img {
        width: 100%;
        height: 100%;
        // object-fit: cover;
      }
    }

    .content {
      padding: 20px;

      h4 {
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 600;
      }
      p {
        margin: 0;
        font-size: 14px;
        font-weight: 300;
      }
    }
  }

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border-radius: 10px;
    // background-color: $primary-color;
    background: radial-gradient(
      250px circle at var(--x) var(--y),
      $primary-color 0,
      transparent 100%
    );

    // If the user is on a touch device
    @media (pointer: coarse) {
      background: radial-gradient(
        500px circle at 50% 50%,
        $primary-color 0,
        transparent 100%
      );
    }
  }
}
</style>
