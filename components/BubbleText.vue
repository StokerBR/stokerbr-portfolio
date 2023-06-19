<script setup>
import { timeout } from '@/assets/utils/functions.js';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  element: {
    type: String,
    default: 'span',
  },
  className: {
    type: String,
    default: '',
  },
  size: {
    type: Number,
    default: 3,
  },
});

const bubbleHovers = ref([]);

// Splits the text into characters and creates the bubble-hovers
let characters = props.text.split('');
characters.forEach((character) => {
  bubbleHovers.value.push({ char: character, active: false, class: '' });
});

// Performs the bubble-hover effect
function handleBubbleHover(index) {
  for (let i = 0; i <= props.size; i++) {
    let bubbleClass = i == 0 ? 'main' : `adjacent-${i}`;

    activateBubbleHover(index - i, bubbleClass);
    activateBubbleHover(index + i, bubbleClass);
  }
}

// Activates the bubble-hover of the specified index, if it exists
function activateBubbleHover(index, bubbleClass) {
  if (index >= 0 && index <= bubbleHovers.value.length - 1) {
    bubbleHovers.value[index].active = true;
    bubbleHovers.value[index].class = bubbleClass;
  }
}

// Deactivates the bubble-hovers
function handleBubbleHoverOut() {
  bubbleHovers.value.forEach((bubbleHover) => {
    bubbleHover.class = '';
    bubbleHover.active = false;
  });
}

// Runs the startup effect
async function runWaveEffect() {
  for (let i = 0; i < bubbleHovers.value.length; i++) {
    handleBubbleHover(i);
    await timeout(100);
    handleBubbleHoverOut();
  }
}

defineExpose({
  runWaveEffect,
});
</script>

<template>
  <component
    :is="element"
    :class="['bubble-text', className]"
    :data-text="text"
  >
    <span
      v-for="(bubbleHover, index) in bubbleHovers"
      :class="[
        'bubble-hover',
        { active: bubbleHover.active },
        bubbleHover.class,
      ]"
      @mouseover="() => handleBubbleHover(index)"
      @mouseout="handleBubbleHoverOut"
      >{{ bubbleHover.char }}</span
    >
  </component>
</template>

<style lang="scss" scoped>
.bubble-text {
  font-weight: 200;

  .bubble-hover {
    transition: all 0.2s;

    &.active {
      &.main {
        font-weight: 900;
        color: #4099ff;
      }
      &.adjacent-1 {
        font-weight: 700;
        color: #3091ff;
      }
      &.adjacent-2 {
        font-weight: 500;
        color: #2088ff;
      }
      &.adjacent-3 {
        font-weight: 300;
        color: #1080ff;
      }
    }
  }
}
</style>
