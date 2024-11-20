<template>
  <div class="events-container">
    <vue-cal
      :events="events"
      :time-from="9 * 60"
      :time-to="22 * 60"
      :disable-views="['years', 'year']"
      :selected-date="selectedDate"
      style-grid
      @event-click="showEventDetails"
      class="custom-calendar"
    >
      <!-- Customize event display -->
      <template #event="{ event }">
        <div class="event-content">
          <div class="event-title">{{ event.title }}</div>
          <div class="event-time">{{ formatTime(event.start) }}</div>
        </div>
      </template>
    </vue-cal>

    <!-- Event Details Modal -->
    <div v-if="selectedEvent" class="modal-backdrop" @click="closeModal">
      <div
        class="modal-content backdrop-blur-sm bg-indigo-900/95 text-white"
        @click.stop
      >
        <button class="close-btn" @click="closeModal">&times;</button>
        <h2>{{ selectedEvent.title }}</h2>
        <div class="event-time">
          {{ formatDateTime(selectedEvent.start) }} -
          {{ formatTime(selectedEvent.end) }}
        </div>
        <p class="event-description">{{ selectedEvent.description }}</p>
        <div class="event-location">📍 {{ selectedEvent.location }}</div>
        <a :href="selectedEvent.signupLink" target="_blank" class="signup-btn">
          Register for Event
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

export default {
  components: { VueCal },
  data: () => ({
    selectedEvent: null,
    selectedDate: new Date(),
    events: [
      {
        start: new Date("2024-11-20 10:00"),
        end: new Date("2024-11-20 12:00"),
        title: "Meditation Workshop",
        description: "A guided session focusing on mindfulness and presence...",
        location: "Inner Work Space",
        signupLink: "https://...",
        class: "meditation-event", // For custom styling
      },
      {
        start: new Date("2024-11-20 14:00"),
        end: new Date("2024-11-20 16:00"),
        title: "Rationality Reading Group",
        description: "Discussion on latest LessWrong sequences...",
        location: "Library",
        signupLink: "https://...",
        class: "reading-event",
      },
      // More events...
    ],
  }),
  methods: {
    showEventDetails(event) {
      this.selectedEvent = event;
    },
    closeModal() {
      this.selectedEvent = null;
    },
    formatTime(date) {
      return new Date(date).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
    },
    formatDateTime(date) {
      return new Date(date).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
};
</script>

<style scoped>
.custom-calendar {
  background: rgba(30, 27, 75, 0.5);
  border-radius: 12px;
  border: 1px solid rgba(139, 92, 246, 0.3);
  --vue-cal-selected-bg: rgba(139, 92, 246, 0.2);
  --vue-cal-event-time-font: 0.9em;
  --vue-cal-event-title-font: 1em;
  color: white;
}

/* Event styling based on type */
.meditation-event {
  background-color: #74bd4933 !important;
  border-left: 3px solid rgb(147, 51, 234) !important;
}

.reading-event {
  background-color: rgba(59, 130, 246, 0.2) !important;
  border-left: 3px solid rgb(59, 130, 246) !important;
}

/* Modal styling */

.modal-backdrop {
  @apply fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50;
}

.modal-content {
  @apply relative rounded-xl p-8 max-w-md w-full shadow-xl border border-purple-500/30;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
}

.signup-btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: rgb(147, 51, 234);
  color: white;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.signup-btn:hover {
  background: rgb(126, 34, 206);
}

/* Event styles */
:deep(.vuecal__event) {
  background: #1bd80233 !important;
  border-left: 3px solid rgb(139, 92, 246) !important;
  padding: 8px;
  transition: all 0.3s ease;
  color: rgb(87, 8, 213);
  font-weight: bold;
  font-family: fantasy;
}

:deep(.vuecal__event:hover) {
  background: rgba(0, 239, 12, 0.3) !important;
  transform: scale(1.02);
}

/* Monthly view specific styles */

:deep(.vuecal__menu) {
  background-color: rgba(30, 27, 75, 0.8) !important;
  padding: 1rem;
}

:deep(.vuecal__title-bar) {
  background-color: transparent !important;
  color: white !important;
}

:deep(.vuecal__cell) {
  background-color: rgba(30, 27, 75, 0.3) !important;
  border-color: rgba(139, 92, 246, 0.2) !important;
}

:deep(.vuecal__cell--today) {
  background-color: rgba(139, 92, 246, 0.2) !important;
}

:deep(.vuecal__cell--selected) {
  background-color: rgba(139, 92, 246, 0.3) !important;
}

:deep(.vuecal__cell--out-of-scope) {
  opacity: 0.3;
}
</style>
