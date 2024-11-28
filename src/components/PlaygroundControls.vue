<!-- components/PlaygroundControls.vue -->
<template>
  <div class="fixed bottom-4 right-4 z-50">
    <!-- Toggle Button -->
    <button
      @click="isOpen = !isOpen"
      class="mb-4 p-2 bg-indigo-900/50 backdrop-blur-sm rounded-full border border-purple-500/30 text-white hover:bg-indigo-800/50 transition-all duration-300 float-right"
    >
      <span v-if="!isOpen">✨</span>
    </button>

    <!-- Controls Panel -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-10 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-10 opacity-0"
    >
      <div
        v-if="isOpen"
        class="w-80 bg-indigo-900/50 backdrop-blur-md rounded-xl border border-purple-500/30 p-6 text-white"
      >
        <!-- Add this header with close button -->
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-bold">Portal Playground</h3>
          <button
            @click="isOpen = false"
            class="text-purple-200 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Stars Section -->
        <div class="mb-6">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-sm">✨</span>
            <h4 class="font-medium">Starfield</h4>
          </div>
          <div class="space-y-4">
            <div>
              <label class="text-sm text-purple-200"
                >Stars: {{ starCount }}</label
              >
              <input
                type="range"
                v-model="starCount"
                min="10"
                max="100"
                class="w-full slider-control"
              />
            </div>
            <div>
              <label class="text-sm text-purple-200"
                >Speed: {{ starSpeed }}s</label
              >
              <input
                type="range"
                v-model="starSpeed"
                min="1"
                max="10"
                step="0.5"
                class="w-full slider-control"
              />
            </div>
          </div>
        </div>

        <!-- Shapes Section -->
        <div class="mb-6">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-sm">🔷</span>
            <h4 class="font-medium">Floating Shapes</h4>
          </div>
          <div class="space-y-4">
            <div>
              <label class="text-sm text-purple-200"
                >Count: {{ shapeCount }}</label
              >
              <input
                type="range"
                v-model="shapeCount"
                min="5"
                max="20"
                class="w-full slider-control"
              />
            </div>
          </div>
        </div>

        <!-- Background Section -->
        <div class="mb-6">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-sm">🎨</span>
            <h4 class="font-medium">Atmosphere</h4>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="text-sm text-purple-200">Primary</label>
              <input
                type="color"
                v-model="primaryColor"
                class="w-full h-8 rounded cursor-pointer"
              />
            </div>
            <div>
              <label class="text-sm text-purple-200">Secondary</label>
              <input
                type="color"
                v-model="secondaryColor"
                class="w-full h-8 rounded cursor-pointer"
              />
            </div>
          </div>
        </div>

        <!-- Reset Button -->
        <button
          @click="resetToDefault"
          class="w-full py-2 px-4 bg-purple-600/50 hover:bg-purple-600/70 rounded-lg transition-colors duration-300"
        >
          Reset to Default
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "PlaygroundControls",
  data() {
    return {
      isOpen: false,
      starCount: 50,
      starSpeed: 3,
      shapeCount: 12,
      primaryColor: "#4c1d95",
      secondaryColor: "#8b5cf6",
    };
  },
  watch: {
    // Emit all changes to parent
    starCount(newVal) {
      this.$emit("update:starCount", newVal);
    },
    starSpeed(newVal) {
      this.$emit("update:starSpeed", newVal);
    },
    shapeCount(newVal) {
      this.$emit("update:shapeCount", newVal);
    },
    primaryColor(newVal) {
      this.$emit("update:primaryColor", newVal);
    },
    secondaryColor(newVal) {
      this.$emit("update:secondaryColor", newVal);
    },
  },
  methods: {
    resetToDefault() {
      this.starCount = 50;
      this.starSpeed = 3;
      this.shapeCount = 12;
      this.primaryColor = "#4c1d95";
      this.secondaryColor = "#8b5cf6";
    },
  },
};
</script>

<style scoped>
.slider-control {
  @apply appearance-none w-full h-2 rounded-lg bg-purple-900;
}

.slider-control::-webkit-slider-thumb {
  @apply appearance-none w-4 h-4 rounded-full bg-purple-400 
           cursor-pointer hover:bg-purple-300 transition-colors;
}

/* Add similar styles for other browser vendors if needed */
</style>
