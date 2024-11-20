<template>
  <div class="magical-portal min-h-screen relative">
    <!-- Background Elements Container -->
    <div class="fixed inset-0 overflow-hidden z-0">
      <!-- Gradient Background -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900"
      ></div>
      <!-- Star Field -->
      <StarField :starCount="50" />
    </div>

    <!-- Floating Shapes -->
    <div class="fixed inset-0 z-30 pointer-events-none">
      <FloatingShapes :count="12" />
    </div>

    <!-- Content Container -->
    <div class="relative z-20">
      <!-- Hero Section -->
      <section class="min-h-screen">
        <div
          class="h-full flex items-center justify-center text-center px-4 pb-20 pt-28"
        >
          <div class="max-w-4xl space-y-8">
            <h1 class="text-6xl font-bold portal-text2">Portal</h1>
            <p class="text-xl text-purple-100 leading-relaxed">
              A space for those seeking truth, depth, and impact. Where rational
              inquiry meets emotional wisdom, and understanding transforms into
              meaningful action.
            </p>
            <div class="flex flex-wrap justify-center gap-6 mt-12">
              <button
                class="px-8 py-4 rounded-full text-lg font-medium bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Begin Your Journey
              </button>
              <button
                @click="scrollToSpaces"
                class="px-8 py-4 rounded-full text-lg font-medium bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Explore Spaces
              </button>
            </div>
          </div>
        </div>

        <!-- Experience Categories -->
        <ExperienceCategories />
      </section>

      <!-- Spaces Section -->
      <section id="spaces-section" class="relative">
        <div class="max-w-7xl mx-auto px-6">
          <PhysicalSpaces />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import FloatingShapes from "@/components/FloatingShapes.vue";
import StarField from "@/components/StarField.vue";
import ExperienceCategories from "@/components/ExperienceCategories.vue";
import PhysicalSpaces from "@/components/PhysicalSpaces.vue";

export default {
  name: "Portal",
  components: {
    FloatingShapes,
    StarField,
    ExperienceCategories,
    PhysicalSpaces,
  },
  data() {
    return {
      menuItems: [
        { name: "Spaces", path: "/spaces" },
        { name: "Events", path: "/events" },
        { name: "About", path: "/about" },
        { name: "Join", path: "/join" },
      ],
    };
  },
  methods: {
    methods: {
      scrollToSpaces() {
        const spacesSection = document.getElementById("spaces-section");
        const offset = 80; // height of your fixed navbar

        const elementPosition = spacesSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      },
    },
  },
};
</script>

<style scoped>
.portal-text {
  background: linear-gradient(
    to right,
    #ff6b6b,
    #4ecdc4,
    #45b7d1,
    #a06cd5,
    #ff6b6b
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  animation: shine 3s linear infinite;
}

.portal-text2 {
  background: linear-gradient(
    to right,
    #ff6b6b,
    #4ecdc4,
    #45b7d1,
    #a06cd5,
    #ff6b6b
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  filter: drop-shadow(0 0 8px rgba(129, 140, 248, 0.5));
  animation: shine 5s linear infinite, glow 2s ease-in-out infinite;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}

@keyframes glow {
  0%,
  100% {
    filter: drop-shadow(0 0 8px rgba(129, 140, 248, 0.5));
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(129, 140, 248, 0.8));
  }
}

.magical-text {
  background: linear-gradient(to right, #fff, #e0e7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s infinite;
}

.nav-link:hover span {
  width: 100%;
}

@keyframes shimmer {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.space-card {
  transition: transform 0.3s ease;
}

.magical-button {
  box-shadow: 0 0 15px rgba(167, 139, 250, 0.3);
}

.magical-button:hover {
  box-shadow: 0 0 25px rgba(167, 139, 250, 0.5);
}
</style>
