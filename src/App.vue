<template>
  <div>
    <nav class="fixed w-full z-50 bg-opacity-90 bg-indigo-900 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex justify-between h-20">
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

          <div class="hidden md:flex items-center space-x-8">
            <router-link
              v-for="item in menuItems"
              :key="item.path"
              :to="item.path"
              class="nav-link relative text-green-500 hover:text-green-400 transition-all duration-300"
            >
              {{ item.name }}
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300"
              ></span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <!-- Main content area - where routes are rendered -->
  <div class="pt-20">
    <!-- Added padding-top to account for fixed nav -->
    <router-view></router-view>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  data() {
    return {
      menuItems: [
        { name: "About", path: "/about" },
        { name: "Spaces", path: "/spaces" },
        { name: "Events", path: "/events" },
        { name: "Join", path: "/join" },
      ],
    };
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
