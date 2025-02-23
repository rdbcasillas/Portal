<!-- src/components/ExperienceCategories.vue -->
<template>
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-6 group">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Think Section -->
        <div
          class="category-card bg-indigo-900/30 hover:border-indigo-400 hover:shadow-indigo-500/30"
        >
          <h2 class="portal-text text-4xl font-serif">Think</h2>
          <p class="text-purple-100">
            Sharpen our understanding of reality and refine the tools we use to
            navigate it.
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in discoverTags"
              :key="tag"
              class="tag bg-indigo-700/50 text-purple-200"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Feel Section -->
        <div
          class="category-card bg-green-900/30 hover:border-green-400 hover:shadow-green-500/30"
        >
          <h2 class="portal-text text-4xl font-serif">Feel</h2>
          <p class="text-purple-100">
            Cultivate emotional depth and foster meaningful connections with
            self and others.
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in expandTags"
              :key="tag"
              class="tag bg-green-700/50 text-green-200"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Do Section -->
        <div
          class="category-card bg-purple-900/30 hover:border-purple-400 hover:shadow-purple-500/30"
        >
          <h2 class="portal-text text-4xl font-serif">Do</h2>
          <p class="text-purple-100">
            Reimagine systems, tackle urgent challenges, and co-create a better
            future.
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in actualizeTags"
              :key="tag"
              class="tag bg-purple-700/50 text-purple-200"
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
/* Apply group so we can control sibling elements */
.category-card {
  @apply space-y-6 p-6 border rounded-2xl shadow-lg backdrop-blur-md transition-all duration-300;
  transform: translateY(0);
}

/* Hover effect - Make hovered card stand out */
.group:hover .category-card {
  opacity: 0.6; /* Dim all cards */
  transform: scale(0.98); /* Slight shrink for inactive cards */
}

/* Keep the hovered card bright and scaled */
.group:hover .category-card:hover {
  opacity: 1 !important;
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0px 10px 20px rgba(255, 255, 255, 0.1);
}

.category-card:hover h2,
.category-card:hover p,
.category-card:hover .tag {
  opacity: 1 !important;
  color: rgba(255, 255, 255, 1) !important; /* Ensure text stays bright */
}

/* Gradient text animation */
.portal-text {
  background: linear-gradient(to right, #fff, #e0e7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: shine 3s linear infinite;
}

/* Tag Styling - Cleaned Up */
.tag {
  @apply px-4 py-2 rounded-full text-sm backdrop-blur-sm transition-all cursor-pointer;
  font-weight: 500;
}

.category-card:hover .tag {
  opacity: 1;
  transform: scale(1.05);
  transition: all 0.2s ease-in-out;
}
</style>
