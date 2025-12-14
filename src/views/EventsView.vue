<template>
  <div class="min-h-screen p-6 text-white max-w-4xl mx-auto">
    <!-- Upcoming Events Section -->
    <section class="mb-16">
      <h1 class="text-4xl font-bold mb-8 text-purple-300">Upcoming Events</h1>
      <div class="border border-purple-400/30 rounded-xl overflow-hidden bg-indigo-900/90 shadow-lg p-8 text-center">
        <div class="text-6xl mb-4 opacity-30">📅</div>
        <p class="text-xl text-purple-200">No upcoming events at the moment</p>
        <p class="text-sm text-purple-300 mt-2">Check back soon for new announcements</p>
      </div>
    </section>

    <!-- Past Events Section -->
    <section>
      <h1 class="text-4xl font-bold mb-8 text-purple-300">Past Events</h1>
      <div class="space-y-6">
        <div
          v-for="event in pastEvents"
          :key="event.title"
          class="border border-purple-400/30 rounded-xl overflow-hidden bg-indigo-900/90 shadow-lg"
        >
          <div class="p-6 space-y-4">
            <h2 class="text-2xl font-semibold">{{ event.title }}</h2>
            <p class="text-sm">{{ event.date }} | {{ event.time }}</p>
            <p class="text-sm">📍 {{ event.location }}</p>
            <p class="text-sm text-purple-100">
              {{ event.description }}
            </p>
            <div class="flex items-center justify-between mt-4">
              <span class="text-xs text-purple-300 uppercase font-semibold">Event Completed</span>
              <a
                v-if="event.link"
                :href="event.link"
                target="_blank"
                class="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pastEvents: [
        {
          title: "Planning Without The Lies: A workshop on the planning fallacy",
          date: "November 29th",
          time: "3:00 PM – 5:00 PM",
          location: "Portal, Bengaluru, Karnataka",
          description: "A workshop on the planning fallacy, exploring why we consistently underestimate how long tasks will take and how to make more realistic plans.",
          link: "https://luma.com/edikvxcz",
        },
        {
          title: "Thinking in bets & bayes: a workshop on bayesian thinking",
          date: "October 26th",
          time: "3:00 PM – 5:00 PM",
          location: "Portal, Bengaluru, Karnataka",
          description: "A workshop on bayesian thinking, exploring how to make better decisions by thinking in probabilities and updating beliefs with new evidence.",
          link: "https://luma.com/flbwbo49",
        },
        {
          title: "Noticing Confusion: A Workshop on Heeding Your Inner Signal",
          date: "September 28th",
          time: "1:30 PM – 3:30 PM",
          location: "Portal, Bengaluru, Karnataka",
          description: "A workshop exploring how to recognize and honor confusion as a valuable inner signal for personal growth and clarity.",
          link: "https://luma.com/96tjjs6f",
        },
        {
          title: "Relating to AI, Relating to Ourselves: A Weekend of Workshops & Conversations @ Portal",
          date: "September 27th - 28th",
          time: "10:00 AM – 6:00 PM",
          location: "Portal, Bengaluru, Karnataka",
          description: "A weekend exploring our relationship with AI and ourselves through workshops and meaningful conversations.",
          link: "https://luma.com/embed/event/evt-8HmJPrdC7nFehlF/simple",
        },
        {
          title: "Circling @ Portal",
          date: "June 22nd, 2025",
          time: "3 PM – 6 PM",
          location: "Portal (RT Nagar, Blr.)",
          description: "Join us for a 3-hour Circling session at Portal – a practice of authentic relating, presence, and connection. Open to newcomers and experienced practitioners alike.",
          link: "https://lu.ma/qtwk3cbu",
        },
      ],
    };
  },
};
</script>

<style scoped>
.events-list {
  font-family: system-ui, sans-serif;
  min-height: 70vh;
}
</style>
