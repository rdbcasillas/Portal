<template>
  <div class="journey-view min-h-screen bg-indigo-900 relative">
    <!-- Background with magical effects -->
    <div class="fixed inset-0">
      <div
        class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900"
      ></div>
      <StarField :starCount="70" />
    </div>

    <!-- Main content -->
    <div class="relative z-10 container mx-auto px-4 py-20">
      <!-- Portals Container -->
      <div class="flex justify-center items-center gap-20 min-h-[70vh]">
        <!-- Rationality Portal -->

        <div
          class="portal rational-portal"
          :class="{ 'portal-active': isRationalityOpen }"
        >
          <div class="portal-ring"></div>
          <div class="portal-content text-center">
            <h2 class="text-2xl font-bold text-white mb-3">Think</h2>
            <p class="text-purple-200 mb-8">
              Enter the world of clear thinking
            </p>
            <button
              @click="explorePortal('think')"
              class="explore-btn group inline-flex items-center gap-2 text-purple-200 hover:text-white transition-all duration-300"
            >
              <span>Explore</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <!-- Emotional Growth Portal -->
        <div
          class="portal emotional-portal"
          :class="{ 'portal-active': isEmotionalOpen }"
        >
          <div class="portal-ring"></div>
          <div class="portal-content text-center">
            <h2 class="text-2xl font-bold text-white mb-3">Feel</h2>
            <p class="text-purple-200 mb-8">Explore emotional wisdom</p>
            <button
              @click="explorePortal('think')"
              class="explore-btn group inline-flex items-center gap-2 text-purple-200 hover:text-white transition-all duration-300"
            >
              <span>Explore</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          class="portal emotional-portal"
          :class="{ 'portal-active': isEmotionalOpen }"
        >
          <div class="portal-ring"></div>
          <div class="portal-content text-center">
            <h2 class="text-2xl font-bold text-white mb-3">Do</h2>
            <p class="text-purple-200 mb-8">
              Translate wisdom to impactful action
            </p>
            <button
              @click="explorePortal('think')"
              class="explore-btn group inline-flex items-center gap-2 text-purple-200 hover:text-white transition-all duration-300"
            >
              <span>Explore</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Knowledge Network (appears when a portal is activated) -->
      <div
        v-if="activeWorld"
        class="knowledge-network absolute inset-0 bg-indigo-900/90 transition-opacity duration-500"
        :class="{ 'opacity-0': !activeWorld, 'opacity-100': activeWorld }"
      >
        <!-- Network visualization will go here -->
      </div>
    </div>
  </div>
</template>

<script>
import StarField from "@/components/StarField.vue";

export default {
  name: "JourneyView",
  components: {
    StarField,
  },
  data() {
    return {
      isRationalityOpen: false,
      isEmotionalOpen: false,
      activeWorld: null,
    };
  },
  methods: {
    openRationalityWorld() {
      this.isRationalityOpen = true;
      this.activeWorld = "rationality";
      // Add animation/transition logic
    },
    openEmotionalWorld() {
      this.isEmotionalOpen = true;
      this.activeWorld = "emotional";
      // Add animation/transition logic
    },
    explorePortal(type) {
      // First, animate the portal
      this.isPortalOpening = true;

      // Then transition to the network view
      setTimeout(() => {
        this.$router.push({
          name: "knowledge-network",
          params: { type },
        });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.portal {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  background: rgba(139, 92, 246, 0.1);
  backdrop-filter: blur(8px);
  transition: all 0.5s ease;
}

/* Remove the automatic animation */
.portal-ring {
  position: absolute;
  inset: 0;
  border: 2px solid rgba(139, 92, 246, 0.5);
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.1);
}

.portal.opening {
  animation: openPortal 1s forwards;
}

@keyframes openPortal {
  0% {
    transform: scale(1);
    filter: brightness(1);
  }
  50% {
    transform: scale(1.5);
    filter: brightness(1.5);
  }
  100% {
    transform: scale(20);
    filter: brightness(2);
    opacity: 0;
  }
}
/* Add animation only on hover */

.portal:hover .portal-ring::before,
.portal:hover .portal-ring::after {
  content: "";
  position: absolute;
  inset: -2px;
  border: 2px solid rgba(139, 92, 246, 0.5);
  border-radius: 50%;
}

.portal:hover .portal-ring {
  animation: glowPulse 3s ease-in-out infinite;
  border-color: rgba(139, 92, 246, 0.8);
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.5), 0 0 30px rgba(139, 92, 246, 0.3),
    inset 0 0 20px rgba(139, 92, 246, 0.3);
}
/* Ensure other portals don't animate */
.portal:not(:hover) .portal-ring {
  animation: none;
}

@keyframes glowPulse {
  0% {
    opacity: 0.4;
    box-shadow: 0 0 10px rgba(139, 92, 246, 0.3),
      0 0 20px rgba(139, 92, 246, 0.2), inset 0 0 10px rgba(139, 92, 246, 0.2);
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.6),
      0 0 40px rgba(139, 92, 246, 0.4), inset 0 0 30px rgba(139, 92, 246, 0.4);
  }
  100% {
    opacity: 0.4;
    box-shadow: 0 0 10px rgba(139, 92, 246, 0.3),
      0 0 20px rgba(139, 92, 246, 0.2), inset 0 0 10px rgba(139, 92, 246, 0.2);
  }
}

.portal-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

/* Add default state for text */
.portal-content h2 {
  transition: all 0.3s ease;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
}

.portal-content p {
  transition: all 0.3s ease;
  opacity: 0.8;
}

/* Add glow animation to text on hover */
.portal:hover .portal-content h2 {
  animation: textGlow 3s ease-in-out infinite;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(139, 92, 246, 0.5);
}

.portal:hover .portal-content p {
  animation: textGlow 3s ease-in-out infinite;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.4),
    0 0 16px rgba(139, 92, 246, 0.4);
}

@keyframes textGlow {
  0% {
    opacity: 0.8;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3),
      0 0 10px rgba(139, 92, 246, 0.3);
  }
  50% {
    opacity: 1;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(139, 92, 246, 0.5), 0 0 30px rgba(139, 92, 246, 0.3);
  }
  100% {
    opacity: 0.8;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3),
      0 0 10px rgba(139, 92, 246, 0.3);
  }
}

.portal-active {
  transform: scale(1.5);
  opacity: 0;
  pointer-events: none;
}

.explore-btn {
  font-size: 0.9rem;
  letter-spacing: 0.025em;
  opacity: 0.9;
}

.explore-btn svg {
  width: 0.9rem; /* Reduced from 1rem (h-4) */
  height: 0.9rem;
}

/* Optional: subtle underline effect on hover */
.explore-btn::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: currentColor;
  transition: width 0.3s ease;
}

.explore-btn:hover::after {
  width: 100%;
}

/* When portal is hovered, button becomes more visible */
.portal:hover .explore-btn {
  opacity: 1;
}
</style>
