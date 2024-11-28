<!-- src/views/SpacesView.vue -->
<template>
  <div
    class="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 py-20"
  >
    <div class="max-w-7xl mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-white mb-4">Our Spaces</h1>
        <p class="text-purple-200 text-lg max-w-2xl mx-auto">
          Each space at Portal is thoughtfully designed to support different
          modes of being, learning, and collaborating.
        </p>
      </div>

      <!-- Spaces Grid -->
      <div class="space-y-24">
        <!-- Meditation & Inner Work Space -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="space-y-4 order-2 md:order-1">
            <h2 class="text-2xl font-bold text-white">
              Meditation & Inner Work Space
            </h2>
            <p class="text-purple-200">
              A serene environment dedicated to practices that cultivate inner
              clarity and emotional wisdom. This space supports both individual
              meditation and group practices focused on authentic relating and
              emotional development.
            </p>
            <ul class="text-purple-200 space-y-2">
              <li class="flex items-center gap-2">
                <span class="text-green-400">✦</span> Soundproof for undisturbed
                practice
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-400">✦</span> Meditation cushions and
                props
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-400">✦</span> Ambient lighting for
                different moods
              </li>
            </ul>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="@/assets/images/meditationarea.jpg"
              alt="Meditation Space"
              class="rounded-xl shadow-lg w-full h-[300px] object-cover"
            />
          </div>
        </div>

        <!-- Workshop Space -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="order-2">
            <img
              src="@/assets/images/coworkingarea.jpg"
              alt="Workshop Space"
              class="rounded-xl shadow-lg w-full h-[300px] object-cover"
            />
          </div>
          <div class="space-y-4 order-1">
            <h2 class="text-2xl font-bold text-white">
              Workshop & Events Space
            </h2>
            <p class="text-purple-200">
              A flexible area designed to accommodate various group activities,
              from intellectual discussions to interactive workshops. This
              versatile space adapts to different learning and collaboration
              styles.
            </p>
            <ul class="text-purple-200 space-y-2">
              <li class="flex items-center gap-2">
                <span class="text-green-400">✦</span> Modular furniture for
                different configurations
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-400">✦</span> Presentation equipment
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-400">✦</span> Whiteboards and
                collaboration tools
              </li>
            </ul>
          </div>
        </div>

        <!-- Library Space -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="space-y-4 order-2 md:order-1">
            <h2 class="text-2xl font-bold text-white">
              Library & Reading Space
            </h2>
            <p class="text-purple-200">
              A quiet sanctuary housing our carefully curated collection of
              books spanning various disciplines. Perfect for focused reading,
              research, and quiet contemplation.
            </p>
            <ul class="text-purple-200 space-y-2">
              <li class="flex items-center gap-2">
                <span class="text-green-400">✦</span> Curated book collection
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-400">✦</span> Comfortable reading nooks
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-400">✦</span> Natural lighting
              </li>
            </ul>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="@/assets/images/PortalHall2.jpg"
              alt="Library Space"
              class="rounded-xl shadow-lg w-full h-[300px] object-cover"
            />
          </div>
        </div>

        <!-- Community Space -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="order-2">
            <img
              src="@/assets/images/PortalHall2.jpg"
              alt="Community Space"
              class="rounded-xl shadow-lg w-full h-[300px] object-cover"
            />
          </div>
          <div class="space-y-4 order-1">
            <h2 class="text-2xl font-bold text-white">
              Community Hall & Co-working Space
            </h2>
            <p class="text-purple-200">
              The heart of Portal, where casual interactions and focused work
              coexist. This space facilitates both individual work and
              spontaneous collaborations among community members.
            </p>
            <ul class="text-purple-200 space-y-2">
              <li class="flex items-center gap-2">
                <span class="text-green-400">✦</span> Comfortable work stations
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-400">✦</span> Meeting areas
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-400">✦</span> Coffee and refreshments
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
