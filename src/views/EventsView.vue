<template>
  <div class="events-list p-6 text-white max-w-3xl mx-auto">
    <div
      v-for="event in events"
      :key="event.title"
      class="mb-12 border border-purple-400/30 rounded-xl overflow-hidden bg-indigo-900/90 shadow-lg"
    >
      <div class="p-6 space-y-4">
        <h2 class="text-2xl font-semibold">{{ event.title }}</h2>
        <p class="text-sm">{{ event.date }} | {{ event.time }}</p>
        <p class="text-sm">📍 {{ event.location }}</p>
        <p class="text-sm text-purple-100">
          Join us for a 3-hour Circling session at Portal – a practice of
          authentic relating, presence, and connection. Open to newcomers and
          experienced practitioners alike.
        </p>
        <a
          :href="event.link"
          target="_blank"
          class="inline-block mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded"
        >
          RSVP Here
        </a>
        <p class="text-sm text-purple-200 mt-4">
          Feel free to DM me for any questions.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          title: "Circling @ Portal",
          date: "June 22nd, 2025",
          time: "3 PM – 6 PM",
          location: "Portal (RT Nagar, Blr.)",
          link: "https://lu.ma/qtwk3cbu",
        },
        // Additional events can be added here
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

img {
  max-height: 300px;
  width: 100%;
  object-fit: contain;
}
</style>
