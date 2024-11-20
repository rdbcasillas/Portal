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
          Our Story
        </h1>
        <div class="prose prose-lg prose-invert">
          <p class="text-xl text-purple-100 leading-relaxed">
            Portal emerged from a vision to create a space where personal
            growth, intellectual rigor, and meaningful connections converge. We
            believe in the power of bringing together minds that seek truth,
            hearts that seek depth, and hands that seek impact.
          </p>
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
                Growth accelerates in community. We create spaces where diverse
                perspectives meet, ideas cross-pollinate, and individuals
                support each other's development journey.
              </p>
            </div>
          </div>

          <!-- Action Orientation Card -->
          <div class="philosophy-card group">
            <div
              class="relative overflow-hidden rounded-xl bg-indigo-800/30 backdrop-blur-sm p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500"
            >
              <h3 class="text-xl font-bold text-white mb-4">
                Theory Meets Practice
              </h3>
              <p class="text-purple-100">
                Knowledge gains power through application. We encourage the
                translation of insights into tangible actions that create
                positive change in the world.
              </p>
            </div>
          </div>

          <!-- Holistic Development Card -->
          <div class="philosophy-card group">
            <div
              class="relative overflow-hidden rounded-xl bg-indigo-800/30 backdrop-blur-sm p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500"
            >
              <h3 class="text-xl font-bold text-white mb-4">
                Full-Spectrum Development
              </h3>
              <p class="text-purple-100">
                True growth encompasses thinking, feeling, and doing. We provide
                spaces and practices that nurture all dimensions of human
                potential.
              </p>
            </div>
          </div>

          <!-- Truth Seeking Card -->
          <div class="philosophy-card group">
            <div
              class="relative overflow-hidden rounded-xl bg-indigo-800/30 backdrop-blur-sm p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500"
            >
              <h3 class="text-xl font-bold text-white mb-4">
                Rigorous Truth-Seeking
              </h3>
              <p class="text-purple-100">
                We embrace intellectual honesty and careful reasoning, while
                remaining open to updating our beliefs in light of new evidence
                and perspectives.
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
                Personal growth serves a greater purpose. We focus on developing
                capabilities that enable us to effectively address important
                challenges facing humanity.
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
              alt="Meditation Room"
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end"
            >
              <p class="text-white p-6">
                Our serene meditation space designed for inner work and
                reflection
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
                  src="@/assets/images/mypic.jpg"
                  alt="Team Member"
                  class="w-full h-full object-cover rounded-full"
                />
                <div
                  class="absolute inset-0 rounded-full border-2 border-purple-500/50 group-hover:border-purple-500 transition-colors duration-500"
                ></div>
              </div>
              <h3 class="text-xl font-bold text-white text-center mb-2">
                Name
              </h3>
              <p class="text-purple-100 text-center">Role/Description</p>
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
