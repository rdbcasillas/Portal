<template>
  <div class="min-h-screen flex flex-col">
    <div>
      <nav
        class="fixed w-full z-50 bg-opacity-90 bg-indigo-900 backdrop-blur-sm"
      >
        <div class="max-w-7xl mx-auto px-6">
          <div class="flex justify-between h-20 items-center">
            <!-- Logo -->
            <router-link
              to="/"
              class="flex items-center space-x-2 text-2xl font-bold text-white magical-text"
            >
              <img
                src="@/assets/portalicon.png"
                alt="Portal Logo"
                class="h-12 w-12"
              />
              <span class="portal-text"> P⦿rtal</span>
            </router-link>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center space-x-8">
              <router-link
                v-for="item in menuItems"
                :key="item.path"
                :to="item.path"
                class="nav-link relative text-green-500 hover:text-green-400 transition-all duration-300"
              >
                {{ item.name }}
              </router-link>
            </div>

            <!-- Mobile Menu Button (Hamburger) -->
            <button
              class="md:hidden text-white focus:outline-none"
              @click="toggleMobileMenu"
            >
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Dropdown Menu -->
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden bg-indigo-900/95 absolute w-full left-0 top-20 py-4 px-6"
        >
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="block py-2 text-center text-green-500 hover:text-green-400 transition-all duration-300"
            @click="toggleMobileMenu"
          >
            {{ item.name }}
          </router-link>
        </div>
      </nav>
    </div>

    <!-- Main content area - where routes are rendered -->
    <div class="pt-20">
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      menuItems: [
        { name: "About", path: "/about" },
        { name: "Spaces", path: "/spaces" },
        { name: "Events", path: "/events" },
        { name: "Join", path: "/join" },
      ],
      isMobileMenuOpen: false, // Controls mobile menu visibility
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>

<style scoped>
body {
  @apply font-sans text-white bg-purple-900;
}
h1,
h2,
h3 {
  @apply font-serif;
}

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

@keyframes shine {
  to {
    background-position: 200% center;
  }
}
</style>
