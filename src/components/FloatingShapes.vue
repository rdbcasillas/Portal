<template>
  <div class="floating-elements absolute inset-0 overflow-hidden z-10">
    <div
      v-for="shape in shapes"
      :key="shape.id"
      class="floating-shape absolute cursor-pointer"
      :class="[shape.class, `float-${shape.animationVariant}`]"
      @mouseenter="startInteraction(shape.id)"
      @mouseleave="endInteraction(shape.id)"
      :style="getShapeStyles(shape)"
    ></div>
  </div>
</template>

<script>
export default {
  name: "FloatingShapes",
  props: {
    count: {
      type: Number,
      default: 15,
    },
  },
  data() {
    return {
      shapes: this.initializeShapes(),
    };
  },
  methods: {
    initializeShapes() {
      return Array.from({ length: this.count }, (_, i) => ({
        id: i,
        class: this.getRandomShape(),
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * (60 - 20) + 20}px`,
        delay: `${Math.random() * 5}s`, // Reduced from 10s to 5s
        opacity: (Math.random() * 0.1).toFixed(2),
        isInteracting: false,
        animationVariant: Math.floor(Math.random() * 3) + 1, // 1, 2, or 3
      }));
    },
    getRandomShape() {
      const shapes = ["circle", "triangle", "square", "diamond"];
      return shapes[Math.floor(Math.random() * shapes.length)];
    },
    startInteraction(id) {
      const shape = this.shapes.find((s) => s.id === id);
      if (shape) shape.isInteracting = true;
    },
    endInteraction(id) {
      const shape = this.shapes.find((s) => s.id === id);
      if (shape) shape.isInteracting = false;
    },
    getShapeStyles(shape) {
      return {
        top: shape.top,
        left: shape.left,
        width: shape.size,
        height: shape.size,
        animationDelay: shape.delay,
        opacity: shape.isInteracting ? "0.5" : shape.opacity,
      };
    },
  },
};
</script>

<style scoped>
.floating-shape {
  position: absolute;
  background: white;
  transition: opacity 0.3s ease;
  animation-play-state: running;
  pointer-events: auto; /* Re-enable pointer events for shapes */
  z-index: 1; /* Base z-index for shapes */
}

.circle {
  border-radius: 50%;
  opacity: 0.5;
}

.triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.triangle:hover {
  background: #8b5cf6; /* Single color for shapes that use clip-path */
  animation: trianglePulse 1s infinite ease-in-out !important;
}

@keyframes trianglePulse {
  0% {
    transform: scale(1.2) rotate(0deg);
    background: #8b5cf6;
  }
  50% {
    transform: scale(1.4) rotate(180deg);
    background: #3b82f6;
  }
  100% {
    transform: scale(1.2) rotate(360deg);
    background: #8b5cf6;
  }
}

.diamond {
  transform: rotate(45deg);
  opacity: 0.5;
}

/* Different movement patterns */
.float-1 {
  animation: float1 8s infinite ease-in-out;
}

.float-2 {
  animation: float2 10s infinite ease-in-out;
}

.float-3 {
  animation: float3 12s infinite ease-in-out;
}

@keyframes float1 {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }
  66% {
    transform: translate(-30px, 30px) rotate(240deg);
  }
  100% {
    transform: translate(0, 0) rotate(360deg);
  }
}

@keyframes float2 {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(-40px, -20px) rotate(180deg);
  }
  100% {
    transform: translate(0, 0) rotate(360deg);
  }
}

@keyframes float3 {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(20px, 40px) rotate(-120deg);
  }
  66% {
    transform: translate(-40px, 20px) rotate(-240deg);
  }
  100% {
    transform: translate(0, 0) rotate(-360deg);
  }
}

/* Hover interaction */
.floating-shape:hover {
  transform: scale(1.4) rotate(15deg);
  z-index: 20;
  /* Create a colorful glow effect */
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.5),
    /* Purple glow */ 0 0 40px rgba(59, 130, 246, 0.3); /* Blue glow */
  background: linear-gradient(
    45deg,
    #8b5cf6,
    #3b82f6
  ); /* Purple to blue gradient */
  /* Optional: Add a pulsing animation on hover */
  animation: pulseAndSpin 1s infinite ease-in-out !important;
}

@keyframes pulseAndSpin {
  0% {
    transform: scale(1.2) rotate(0deg);
    background: linear-gradient(45deg, #8b5cf6, #3b82f6);
  }
  50% {
    transform: scale(1.4) rotate(180deg);
    background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  }
  100% {
    transform: scale(1.2) rotate(360deg);
    background: linear-gradient(45deg, #8b5cf6, #3b82f6);
  }
}

/* User interaction animation */
.user-interaction {
  animation: wiggle 0.5s ease-in-out infinite !important;
  z-index: 20;
}

@keyframes wiggle {
  0%,
  100% {
    transform: rotate(0deg) scale(1.2);
  }
  25% {
    transform: rotate(15deg) scale(1.2);
  }
  75% {
    transform: rotate(-15deg) scale(1.2);
  }
}
</style>
