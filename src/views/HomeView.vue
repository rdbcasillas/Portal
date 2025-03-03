<template>
  <div class="magical-portal relative">
    <!-- Background Elements Container -->
    <div class="fixed inset-0 z-0">
      <!-- Gradient Background -->
      <!-- <div
        class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900"
      ></div> -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900"
        :style="{
          background: `linear-gradient(to bottom right, ${primaryColor}, ${viaColor}, ${secondaryColor})`,
        }"
      ></div>
      <!-- Star Field -->
      <StarField :count="starCount" :speed="starSpeed" />
    </div>

    <!-- Floating Shapes -->
    <div class="fixed inset-0 z-30 pointer-events-none">
      <FloatingShapes :count="shapeCount" />
    </div>
  </div>

  <!-- Content Container -->
  <div class="relative z-20 min-h-screen flex flex-col">
    <!-- Hero Section -->
    <section class="flex-grow">
      <div
        class="h-full flex items-center justify-center text-center px-4 pb-20 pt-28"
      >
        <div class="max-w-4xl space-y-8">
          <!-- Animated Portal Heading -->
          <h1 class="text-6xl font-bold portal-text2 animate-glow">P⦿rtal</h1>

          <!-- Improved Text -->
          <p class="text-xl text-purple-100 leading-relaxed">
            A space for those who seek depth, clarity, and transformation. Where
            rational inquiry meets emotional wisdom and insight turns into
            action.
          </p>

          <!-- Better Buttons with Gradient & Hover Effects -->
          <div class="flex flex-wrap justify-center gap-6 mt-12">
            <button
              @click="$router.push('/about')"
              class="btn-glow bg-gradient-to-r from-green-400 to-green-600"
            >
              Learn More
            </button>
            <button
              @click="$router.push('/spaces')"
              class="btn-glow bg-gradient-to-r from-blue-400 to-blue-600"
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
  <PlaygroundControls
    @update:starCount="starCount = $event"
    @update:starSpeed="starSpeed = $event"
    @update:shapeCount="shapeCount = $event"
    @update:primaryColor="primaryColor = $event"
    @update:viaColor="viaColor = $event"
    @update:secondaryColor="secondaryColor = $event"
  />
</template>

<script>
import PlaygroundControls from "@/components/PlaygroundControls.vue";
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
    PlaygroundControls,
  },
  data() {
    return {
      starCount: 50,
      starSpeed: 3,
      shapeCount: 12,
      primaryColor: "#312e81", // indigo-900
      viaColor: "#6b21a8", // purple-800
      secondaryColor: "#1e3a8a", // blue-900
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

/* Animated Glow Effect for the "Portal" Heading */
/* @keyframes glow {
  0% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
  100% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
}
.animate-glow {
  animation: glow 2s infinite alternate ease-in-out;
} */

/* Gradient Buttons with Glow & Hover Effects */
.btn-glow {
  @apply px-8 py-4 rounded-full text-lg font-medium text-white transition-all duration-300 shadow-lg;
  box-shadow: 0px 5px 15px rgba(0, 255, 128, 0.2);
}

.btn-glow:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0px 8px 20px rgba(0, 255, 128, 0.4);
}
</style>
