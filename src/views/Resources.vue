<template>
  <div class="min-h-screen bg-indigo-900 text-white p-10">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-serif text-center">📚 Portal Resources</h1>

      <!-- Search & Filters -->
      <div class="mt-6 flex flex-col items-center">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search..."
          class="w-full max-w-lg p-3 rounded-md text-black"
        />
        <div class="flex gap-3 mt-4 flex-wrap">
          <button
            v-for="category in categories"
            :key="category"
            @click="filterCategory(category)"
            :class="[
              'px-4 py-2 rounded-full text-sm transition-all',
              selectedCategory === category
                ? 'bg-green-500 text-white'
                : 'bg-purple-700 hover:bg-purple-600',
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Resources Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div
          v-for="resource in filteredResources"
          :key="resource.id"
          class="resource-card"
        >
          <!-- 🔹 Thumbnail at the top -->
          <img
            :src="getThumbnail(resource)"
            class="w-20 h-20 object-cover rounded-md"
          />

          <!-- 🔹 Colored Category Tag -->
          <span :class="['category-tag', getCategoryColor(resource.category)]">
            {{ resource.category }}
          </span>

          <h3 class="text-lg font-medium mt-3">{{ resource.title }}</h3>
          <p class="text-sm text-gray-300">{{ resource.description }}</p>

          <!-- 🔹 Tags -->
          <div class="flex flex-wrap gap-2 mt-2">
            <span
              v-for="tag in resource.tags"
              :key="tag"
              class="text-xs bg-gray-700 px-2 py-1 rounded-full"
            >
              {{ tag }}
            </span>
          </div>

          <a
            :href="resource.link"
            target="_blank"
            class="text-green-400 hover:text-green-300 text-sm mt-2 block"
          >
            View Resource →
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      categories: ["All", "Books", "blog", "Videos", "Podcasts", "Tools"],
      selectedCategory: "All",
      resources: [
        {
          id: 1,
          title: "LessWrong",
          description: "A community blog on rationality & epistemology.",
          link: "https://www.lesswrong.com",
          category: "blog",
          tags: ["Rationality", "Epistemology"],
          image: "",
        },
        {
          id: 2,
          title: "Meaningness",
          description: "Exploring meaning & sense-making in modern life.",
          link: "https://meaningness.com",
          category: "blog",
          tags: ["Meaning", "Philosophy"],
          image: "",
        },
        {
          id: 3,
          title: "The Map is Not the Territory",
          description: "Understanding abstraction vs reality.",
          link: "#",
          category: "Books",
          tags: ["Epistemology", "Mental Models"],
          image: "",
        },
        {
          id: 4,
          title: "AI & The Future",
          description: "Deep discussion on AI risks.",
          link: "#",
          category: "Videos",
          tags: ["Artificial Intelligence", "Future"],
          image: "",
        },
      ],
    };
  },
  computed: {
    filteredResources() {
      return this.resources.filter(
        (r) =>
          (this.selectedCategory === "All" ||
            r.category === this.selectedCategory) &&
          r.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    filterCategory(category) {
      this.selectedCategory = category;
    },
    getThumbnail(resource) {
      return (
        resource.image ||
        `https://www.google.com/s2/favicons?domain=${resource.link}&sz=128`
      );
    },
    getCategoryColor(category) {
      const colors = {
        Books: "bg-blue-500",
        blog: "bg-teal-500",
        Videos: "bg-green-500",
        Podcasts: "bg-yellow-500",
        Tools: "bg-purple-500",
      };
      return colors[category] || "bg-gray-500"; // Default color if category not found
    },
  },
};
</script>

<style scoped>
/* 🔹 Card Styling */
.resource-card {
  @apply bg-white/10 p-6 rounded-lg backdrop-blur-md transition-all relative;
}
.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px rgba(255, 255, 255, 0.1);
}

/* 🔹 Category Tag */
.category-tag {
  @apply text-xs font-bold px-2 py-1 rounded-full text-white absolute top-2 right-2;
}
</style>
