<template>
  <footer class="bg-indigo-950 text-white py-10 min-h-[80px]">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <!-- Logo & About -->
        <div class="text-center md:text-left">
          <h3 class="text-2xl font-serif">Portal</h3>
          <p class="text-sm text-gray-300 mt-2">
            A space for wisdom, inquiry, and community.
          </p>
        </div>

        <!-- Email Signup -->
        <div class="w-full md:w-1/2">
          <h4 class="text-lg font-medium text-center md:text-left">
            Stay Updated
          </h4>
          <form
            @submit.prevent="subscribe"
            class="mt-2 flex flex-col sm:flex-row gap-3"
          >
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              class="p-3 rounded-md w-full text-black"
              required
            />
            <button
              type="submit"
              class="bg-green-500 hover:bg-green-400 px-4 py-3 rounded-md font-medium"
              :disabled="loading"
            >
              {{ loading ? "Submitting..." : "Subscribe" }}
            </button>
          </form>
          <p
            v-if="message"
            :class="messageClass"
            class="mt-2 text-sm text-center md:text-left"
          >
            {{ message }}
          </p>
        </div>

        <!-- Social Links -->
        <div class="flex gap-4">
          <a href="#" class="text-gray-300 hover:text-white transition-all"
            >Twitter</a
          >
          <a href="#" class="text-gray-300 hover:text-white transition-all"
            >Instagram</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      loading: false,
      message: "",
      messageClass: "text-green-400",
    };
  },
  methods: {
    async subscribe() {
      if (!this.email) return;

      this.loading = true;
      this.message = "";

      try {
        const response = await fetch("https://connect.mailerlite.com/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
          },
          body: JSON.stringify({
            email: this.email,
          }),
        });

        if (response.ok) {
          this.message = "✅ Thanks for subscribing!";
          this.messageClass = "text-green-400";
          this.email = ""; // Clear input field
        } else {
          const errorData = await response.json();
          this.message = `❌ Error: ${errorData.error.message}`;
          this.messageClass = "text-red-400";
        }
      } catch (error) {
        console.error("Subscription failed", error);
        this.message = "❌ Something went wrong. Try again!";
        this.messageClass = "text-red-400";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
footer {
  position: relative;
  z-index: 50; /* Higher than floating shapes */
}
</style>
