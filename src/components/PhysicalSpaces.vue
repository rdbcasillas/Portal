<template>
  <section class="py-20 bg-gradient-to-b from-indigo-900 to-purple-900">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-center text-white magical-text mb-16">
        Our Physical Spaces
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <!-- Inner Work Space -->
        <div
          class="space-card group inner-work transition-all duration-500 hover:scale-[1.02]"
        >
          <div
            class="relative overflow-hidden rounded-xl bg-indigo-800/50 backdrop-blur-sm p-8 border border-purple-500/30"
          >
            <div class="space-icon text-4xl mb-4">🕯️</div>
            <h3 class="text-xl font-bold text-white mb-3">Inner Work Space</h3>
            <p class="text-purple-200">
              A dedicated room for meditation, authentic relating practices, and
              deep emotional work. A sacred space designed for both individual
              practice and intimate group sessions.
            </p>
          </div>
        </div>

        <!-- Workshop Space -->
        <div
          class="space-card group workshop transition-all duration-500 hover:scale-[1.02]"
        >
          <div
            class="relative overflow-hidden rounded-xl bg-indigo-800/50 backdrop-blur-sm p-8 border border-purple-500/30"
          >
            <div class="space-icon text-4xl mb-4">🎨</div>
            <h3 class="text-xl font-bold text-white mb-3">Workshop Studio</h3>
            <p class="text-purple-200">
              Our flexible activity space hosting workshops, seminars, group
              discussions and various learning experiences. Adaptable for
              different group sizes and session types.
            </p>
          </div>
        </div>

        <!-- Library -->
        <div
          class="space-card group library transition-all duration-500 hover:scale-[1.02]"
        >
          <div
            class="relative overflow-hidden rounded-xl bg-indigo-800/50 backdrop-blur-sm p-8 border border-purple-500/30"
          >
            <div class="space-icon text-4xl mb-4">📚</div>
            <h3 class="text-xl font-bold text-white mb-3">Reading Library</h3>
            <p class="text-purple-200">
              A quiet sanctuary housing our curated collection of books. Perfect
              for focused reading, research and quiet contemplation. A
              thoughtfully curated collection that blends wisdom with wonder.
            </p>
          </div>
        </div>

        <!-- Community Hall -->
        <div
          class="space-card group community transition-all duration-500 hover:scale-[1.02]"
        >
          <div
            class="relative overflow-hidden rounded-xl bg-indigo-800/50 backdrop-blur-sm p-8 border border-purple-500/30"
          >
            <div class="space-icon text-4xl mb-4">💫</div>
            <h3 class="text-xl font-bold text-white mb-3">Community Hall</h3>
            <p class="text-purple-200">
              Our central space for co-working, casual interactions, and shared
              moments over food and drinks. A vibrant environment where ideas
              flow, connections spark, and conversations unfold naturally..
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
/* Floating animation for icons */

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
  }
}

/* Different hover effects for each space type */
.inner-work:hover .space-icon {
  /* Gentle pulsing for meditation space */
  animation: pulse 2s ease-in-out infinite, glow 2s infinite ease-in-out;
}

.workshop:hover .space-icon {
  /* Dynamic rotation for workshop space */
  animation: kaleidoscope 4s infinite ease-in-out, glow 2s infinite ease-in-out;
}

.library:hover .space-icon {
  /* Subtle glow for library */
  animation: glow 2s ease-in-out infinite;
}

.community:hover .space-icon {
  /* Connection-suggesting movement */
  animation: connect 3s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(0.9);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

@keyframes kaleidoscope {
  0% {
    transform: rotate(0deg) scale(1);
    filter: hue-rotate(0deg);
  }
  25% {
    transform: rotate(90deg) scale(1.1);
    filter: hue-rotate(90deg);
  }
  50% {
    transform: rotate(180deg) scale(1);
    filter: hue-rotate(180deg);
  }
  75% {
    transform: rotate(270deg) scale(1.1);
    filter: hue-rotate(270deg);
  }
  100% {
    transform: rotate(360deg) scale(1);
    filter: hue-rotate(360deg);
  }
}

@keyframes glow {
  0%,
  100% {
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.8));
  }
}

@keyframes connect {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.1) rotate(180deg);
  }
}
</style>
