<!-- src/components/ExperienceCategories.vue -->
<template>
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-20">
        <!-- Discover Section -->
        <div class="space-y-6">
          <h2 class="portal-text text-4xl font-serif">Think</h2>
          <p class="text-purple-100">
            Improve our models of reality and the methods we use to build them
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in discoverTags"
              :key="tag"
              class="px-4 py-2 rounded-full text-sm bg-indigo-900/50 backdrop-blur-sm border border-indigo-500/30 text-white hover:border-indigo-500 transition-all cursor-pointer"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Expand Section -->
        <div class="space-y-6">
          <h2 class="portal-text text-4xl font-serif">Feel</h2>
          <p class="text-purple-100">
            Develop emotional resilience and forge deeper connections with self
            and others
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in expandTags"
              :key="tag"
              class="px-4 py-2 rounded-full text-sm bg-green-900/50 backdrop-blur-sm border border-green-500/30 text-white hover:border-green-500 transition-all cursor-pointer"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Actualize Section -->
        <div class="space-y-6">
          <h2 class="portal-text text-4xl font-serif">Do</h2>
          <p class="text-purple-100">
            Debug existing systems, collaborate on urgent issues & shape a
            better future for humanity
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in actualizeTags"
              :key="tag"
              class="px-4 py-2 rounded-full text-sm bg-purple-900/50 backdrop-blur-sm border border-purple-500/30 text-white hover:border-purple-500 transition-all cursor-pointer"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ExperienceCategories",
  data() {
    return {
      discoverTags: [
        "SYSTEMS THINKING",
        "METACRISES",
        "X-RISKS",
        "PHILOSOPHY",
        "LOGIC & REASONING",
        "COGNITIVE SCIENCE",
        "MENTAL MODELS",
        "MEANING-MAKING",
        "EPISTEMOLOGY",
      ],
      expandTags: [
        "MEDITATION",
        "AUTHENTIC RELATING",
        "EMOTIONAL AWARENESS",
        "NONVIOLENT COMMUNICATION",
        "SOMATIC PRACTICES",
        "INNER ALIGNMENT",
        "COMPASSION",
      ],
      actualizeTags: [
        "PRODUCTIVITY SYSTEMS",
        "CIVIC ENGAGEMENT",
        "POLICY & PROGRESS",
        "CAREER WAYFINDING",
        "PURPOSE-MAKING",
        "WORLD BUILDING",
        "EFFECTIVE ALTRUISM",
      ],
    };
  },
};
</script>

<style scoped>
/* Add if you don't have this gradient text style globally */
.portal-text {
  background: linear-gradient(to right, #fff, #e0e7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: shine 3s linear infinite;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}
</style>
