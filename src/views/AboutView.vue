<!-- src/views/AboutView.vue -->
<template>
  <div class="relative min-h-screen">
    <!-- Background with subtle animated gradient -->
    <div
      class="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900"
    >
      <!-- Optional: Subtle floating particles similar to stars but more sparse -->
      <StarField :starCount="30" />
    </div>

    <!-- Main Content -->
    <div class="relative z-10 pt-24 pb-12">
      <!-- Hero Section -->
      <section class="px-4 max-w-6xl mx-auto mb-24">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-8 portal-text">
          Motivation
        </h1>
        <div class="prose prose-lg prose-invert">
          <p class="text-xl text-purple-100 leading-relaxed">
            Portal emerged from a hunger for spaces that nurture deeper human
            connection, experiential learning, and meaningful collaboration. In
            a world of superficial interactions and standardized education,
            we're creating an environment where people can learn and explore
            together - combining intellectual rigor with emotional wisdom,
            individual growth with collective flourishing. By bringing together
            curious minds and open hearts from diverse backgrounds, we hope to
            spark meaningful relationships and unexpected insights that enrich
            both personal development and our shared future.
          </p>
        </div>
        <div class="mt-8 text-center">
          <a
            href="/VisionForPortal.pdf"
            target="_blank"
            class="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-all duration-300"
          >
            <span>Read one of our <b>visions</b> here</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </section>

      <!-- Philosophy Section with Animated Cards -->
      <section class="px-4 max-w-6xl mx-auto mb-24">
        <h2 class="text-3xl font-bold text-white mb-12">Our Philosophy</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="philosophy-card group">
            <div
              class="relative overflow-hidden rounded-xl bg-indigo-800/30 backdrop-blur-sm p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500"
            >
              <h3 class="text-xl font-bold text-white mb-4">
                Integration of Mind & Heart
              </h3>
              <p class="text-purple-100">
                We bridge rational inquiry with emotional intelligence,
                believing that true wisdom emerges from their synthesis.
              </p>
            </div>
          </div>

          <div class="philosophy-card group">
            <div
              class="relative overflow-hidden rounded-xl bg-indigo-800/30 backdrop-blur-sm p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500"
            >
              <h3 class="text-xl font-bold text-white mb-4">
                Collaborative Growth
              </h3>
              <p class="text-purple-100">
                We provide spaces where diverse perspectives meet, ideas
                cross-pollinate, and individuals support each other's
                development journey.
              </p>
            </div>
          </div>

          <!-- Action Orientation Card -->
          <!-- <div class="philosophy-card group">
            <div
              class="relative overflow-hidden rounded-xl bg-indigo-800/30 backdrop-blur-sm p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500"
            >
              <h3 class="text-xl font-bold text-white mb-4">
                Theory Meets Practice
              </h3>
              <p class="text-purple-100">
                We encourage the translation of knowledge and insights into
                tangible actions that create positive change in the world.
              </p>
            </div>
          </div> -->

          <!-- Holistic Development Card -->
          <div class="philosophy-card group">
            <div
              class="relative overflow-hidden rounded-xl bg-indigo-800/30 backdrop-blur-sm p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500"
            >
              <h3 class="text-xl font-bold text-white mb-4">
                Full-Spectrum Development
              </h3>
              <p class="text-purple-100">
                True growth encompasses effective thinking, feeling and doing.
                We provide spaces and practices that nurture all dimensions of
                human potential.
              </p>
            </div>
          </div>

          <!-- Truth Seeking Card -->
          <div class="philosophy-card group">
            <div
              class="relative overflow-hidden rounded-xl bg-indigo-800/30 backdrop-blur-sm p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500"
            >
              <h3 class="text-xl font-bold text-white mb-4">
                Better Maps of Reality
              </h3>
              <p class="text-purple-100">
                Our beliefs are maps, not the territory itself. We strive to
                continuously refine these maps, always ready to update them when
                they conflict with reality.
              </p>
            </div>
          </div>

          <!-- Impact Focus Card -->
          <div class="philosophy-card group">
            <div
              class="relative overflow-hidden rounded-xl bg-indigo-800/30 backdrop-blur-sm p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500"
            >
              <h3 class="text-xl font-bold text-white mb-4">
                Meaningful Impact
              </h3>
              <p class="text-purple-100">
                Focus on developing capabilities that enable us to effectively
                address important challenges facing humanity.
              </p>
            </div>
          </div>
          <!-- Add more philosophy cards -->
        </div>
      </section>

      <!-- Space Showcase -->
      <section class="px-4 max-w-6xl mx-auto mb-24">
        <h2 class="text-3xl font-bold text-white mb-12">Our Space</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Image placeholders - replace with actual images -->
          <div
            class="space-image rounded-xl overflow-hidden aspect-video relative group cursor-pointer"
          >
            <img
              src="@/assets/images/PortalHallArea.jpg"
              alt="Cozy Common Area"
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end"
            >
              <p class="text-white p-6">
                Common area for co-working, discussions or just chilling
              </p>
            </div>
          </div>
          <div
            class="space-image rounded-xl overflow-hidden aspect-video relative group cursor-pointer"
          >
            <img
              src="@/assets/images/PortalHall2.jpg"
              alt="Cozy Common Area"
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end"
            >
              <p class="text-white p-6">
                Common area for co-working, discussions or just chilling
              </p>
            </div>
          </div>
          <!-- Add more space images -->
        </div>
      </section>

      <!-- Team Section with Hover Effects -->
      <section class="px-4 max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-white mb-12">Our Team</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="team-member group">
            <div
              class="relative overflow-hidden rounded-xl bg-indigo-800/30 backdrop-blur-sm p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500"
            >
              <div class="relative w-32 h-32 mx-auto mb-6">
                <img
                  src="@/assets/images/vatspic3.jpeg"
                  alt="Team Member"
                  class="w-full h-full object-cover rounded-full"
                />
                <div
                  class="absolute inset-0 rounded-full border-2 border-purple-500/50 group-hover:border-purple-500 transition-colors duration-500"
                ></div>
              </div>
              <h3 class="text-xl font-bold text-white text-center mb-2">
                Vatsal
              </h3>
              <p class="text-purple-100 text-center">Pedagogy/Tech Handler</p>
              <!-- Social links -->
              <div class="flex justify-center space-x-4 mt-4">
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div class="team-member group">
            <div
              class="relative overflow-hidden rounded-xl bg-indigo-800/30 backdrop-blur-sm p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500"
            >
              <div class="relative w-32 h-32 mx-auto mb-6">
                <img
                  src="@/assets/images/harshitpic.png"
                  alt="Team Member"
                  class="w-full h-full object-cover rounded-full"
                />
                <div
                  class="absolute inset-0 rounded-full border-2 border-purple-500/50 group-hover:border-purple-500 transition-colors duration-500"
                ></div>
              </div>
              <h3 class="text-xl font-bold text-white text-center mb-2">
                Harshit
              </h3>
              <p class="text-purple-100 text-center">
                Everything Handler (only if mood)
              </p>
              <!-- Social links -->
              <div class="flex justify-center space-x-4 mt-4">
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div class="team-member group">
            <div
              class="relative overflow-hidden rounded-xl bg-indigo-800/30 backdrop-blur-sm p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500"
            >
              <div class="relative w-32 h-32 mx-auto mb-6">
                <img
                  src="@/assets/images/manasvipic.png"
                  alt="Team Member"
                  class="w-full h-full object-cover rounded-full"
                />
                <div
                  class="absolute inset-0 rounded-full border-2 border-purple-500/50 group-hover:border-purple-500 transition-colors duration-500"
                ></div>
              </div>
              <h3 class="text-xl font-bold text-white text-center mb-2">
                Manasvi
              </h3>
              <p class="text-purple-100 text-center">Design/Marketing</p>
              <!-- Social links -->
              <div class="flex justify-center space-x-4 mt-4">
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <!-- Add more team members -->
        </div>
      </section>
      <section class="px-4 max-w-6xl mx-auto mt-8">
        <h2 class="text-3xl font-bold text-white mb-12">Our Advisors</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="team-member group">
            <div
              class="relative overflow-hidden rounded-xl bg-indigo-800/30 backdrop-blur-sm p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500"
            >
              <div class="relative w-32 h-32 mx-auto mb-6">
                <img
                  src="@/assets/images/nishitpic.jpeg"
                  alt="Team Member"
                  class="w-full h-full object-cover rounded-full"
                />
                <div
                  class="absolute inset-0 rounded-full border-2 border-purple-500/50 group-hover:border-purple-500 transition-colors duration-500"
                ></div>
              </div>
              <h3 class="text-xl font-bold text-white text-center mb-2">
                Nishit
              </h3>
              <p class="text-purple-100 text-center">EA Community Builder</p>
              <!-- Social links -->
              <div class="flex justify-center space-x-4 mt-4">
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div class="team-member group">
            <div
              class="relative overflow-hidden rounded-xl bg-indigo-800/30 backdrop-blur-sm p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500"
            >
              <div class="relative w-32 h-32 mx-auto mb-6">
                <img
                  src="@/assets/images/kunalpic.jpeg"
                  alt="Team Member"
                  class="w-full h-full object-cover rounded-full"
                />
                <div
                  class="absolute inset-0 rounded-full border-2 border-purple-500/50 group-hover:border-purple-500 transition-colors duration-500"
                ></div>
              </div>
              <h3 class="text-xl font-bold text-white text-center mb-2">
                Kunal
              </h3>
              <p class="text-purple-100 text-center">Self Exploration Coach</p>
              <!-- Social links -->
              <div class="flex justify-center space-x-4 mt-4">
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <!-- Add more team members -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import StarField from "@/components/StarField.vue";

export default {
  name: "AboutView",
  components: {
    StarField,
  },
};
</script>
