// src/components/StarField.vue
<template>
  <div class="star-field absolute inset-0 z-1">
    <div
      v-for="i in count"
      :key="i"
      class="star absolute rounded-full bg-white"
      :style="{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 4}px`,
        height: `${Math.random() * 4}px`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${speed}s`,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "StarField",
  props: {
    count: {
      type: Number,
      default: 50,
    },
    speed: {
      type: Number,
      default: 3,
    },
  },
};
</script>

<style scoped>
.star {
  animation: twinkle 4s infinite;
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
