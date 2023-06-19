<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
    <BubbleText
      ref="bubbleText"
      text="StokerBR"
      class="stokerbr-text loading fadein"
    />
  </div>
</template>

<script setup>
import { timeout } from '~/assets/utils/functions';

const props = defineProps({
  isLoading: {
    type: Boolean,
    required: true,
  },
});
const bubbleText = ref(null);

async function loading() {
  await timeout(500);
  while (props.isLoading) {
    bubbleText.value.runWaveEffect();
    await timeout(2000);
  }
}

onMounted(() => {
  loading();
});
</script>

<style lang="scss">
@import '@/assets/scss/components/stokerbr-text.scss';

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $background-color;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1000;

  .loading {
    font-size: 32px;
    font-weight: 200;
    text-align: center;
    position: absolute;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    animation: zoomin 0.5s forwards;
  }

  &.fadeout {
    animation: fadeout 0.5s forwards;
  }
}

@keyframes zoomin {
  from {
    opacity: 0;
    visibility: hidden;
    transform: scale(0);
  }
  to {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
