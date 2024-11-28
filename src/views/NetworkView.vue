<!-- components/ThinkNetwork.vue -->
<template>
  <div class="network-container h-screen w-full bg-indigo-900/95">
    <!-- Network container -->
    <div ref="network" class="h-full w-full"></div>

    <!-- Optional: Node details popup when clicked -->
    <div
      v-if="selectedNode"
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-900/95 backdrop-blur-md p-8 rounded-xl border border-purple-500/30 max-w-md w-full"
    >
      <h3 class="text-xl font-bold text-white mb-4">
        {{ selectedNode.title }}
      </h3>
      <p class="text-purple-200 mb-6">{{ selectedNode.description }}</p>
      <a
        :href="selectedNode.url"
        target="_blank"
        class="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors"
      >
        Visit Site
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
  </div>
</template>

<script>
import { Network } from "vis-network";
import { DataSet } from "vis-data";
import networkData from "@/data/think-network.json";

// Convert the data for vis-network
const nodes = new DataSet(
  networkData.nodes.map((node) => ({
    id: node.id,
    label: node.label,
    // Instead of using circularImage shape, use circle with a label inside
    shape: "circle",
    // Get first letter of the label to show inside circle
    title: node.label,
    font: {
      size: 16,
      color: "#ffffff",
    },
    size: networkData.categories[node.category].size,
    color: {
      background: networkData.categories[node.category].color + "33",
      border: networkData.categories[node.category].color,
      highlight: {
        background: networkData.categories[node.category].color + "66",
        border: networkData.categories[node.category].color,
      },
    },
    category: node.category,
    description: node.description,
    resources: node.resources,
  }))
);

const edges = new DataSet(
  networkData.connections.map((conn) => ({
    from: conn.from,
    to: conn.to,
    width: conn.strength * 3,
    color: {
      color: "rgba(139, 92, 246, " + conn.strength + ")",
      highlight: "rgba(139, 92, 246, 0.8)",
    },
  }))
);
export default {
  name: "ThinkNetwork",
  data() {
    return {
      network: null,
      selectedNode: null,
      nodes: new DataSet(
        networkData.nodes.map((node) => ({
          id: node.id,
          label: node.label,
          // Instead of using circularImage shape, use circle with a label inside
          shape: "circle",
          // Get first letter of the label to show inside circle
          title: node.label,
          font: {
            size: 16,
            color: "#ffffff",
          },
          size: networkData.categories[node.category].size,
          color: {
            background: networkData.categories[node.category].color + "33",
            border: networkData.categories[node.category].color,
            highlight: {
              background: networkData.categories[node.category].color + "66",
              border: networkData.categories[node.category].color,
            },
          },
          category: node.category,
          description: node.description,
          resources: node.resources,
        }))
      ),

      edges: new DataSet(
        networkData.connections.map((conn) => ({
          from: conn.from,
          to: conn.to,
          width: conn.strength * 3,
          color: {
            color: "rgba(139, 92, 246, " + conn.strength + ")",
            highlight: "rgba(139, 92, 246, 0.8)",
          },
        }))
      ),
      //   nodes: new DataSet([
      //     {
      //       id: 1,
      //       label: "LessWrong",
      //       title: "LessWrong",
      //       shape: "circularImage",
      //       image: "https://www.lesswrong.com/favicon.ico",
      //       size: 40,
      //       description: "Community blog focused on rationality and AI alignment",
      //       url: "https://www.lesswrong.com",
      //     },
      //     {
      //       id: 2,
      //       label: "Stanford Encyclopedia",
      //       title: "Stanford Encyclopedia of Philosophy",
      //       shape: "circularImage",
      //       image: "https://plato.stanford.edu/favicon.ico",
      //       size: 40,
      //       description:
      //         "Comprehensive philosophy resource maintained by Stanford",
      //       url: "https://plato.stanford.edu",
      //     },
      //     {
      //       id: 3,
      //       label: "Metacrisis",
      //       title: "Metacrisis",
      //       shape: "circularImage",
      //       image: "/path-to-local-image.png", // You'll need to add this
      //       size: 40,
      //       description: "Understanding and addressing civilizational challenges",
      //       url: "#",
      //     },
      //     // Add more nodes...
      //   ]),
      //   edges: new DataSet([
      //     {
      //       from: 1,
      //       to: 2,
      //       length: 200,
      //       color: {
      //         color: "rgba(139, 92, 246, 0.2)",
      //         highlight: "rgba(139, 92, 246, 0.5)",
      //       },
      //     },
      //     {
      //       from: 1,
      //       to: 3,
      //       length: 200,
      //       color: {
      //         color: "rgba(139, 92, 246, 0.2)",
      //         highlight: "rgba(139, 92, 246, 0.5)",
      //       },
      //     },
      //     // Add more connections...
      //   ]),
    };
  },
  mounted() {
    const container = this.$refs.network;

    const options = {
      nodes: {
        borderWidth: 2,
        borderWidthSelected: 3,
        shadow: {
          enabled: true,
          color: "rgba(0,0,0,0.2)",
          size: 10,
          x: 5,
          y: 5,
        },
        font: {
          color: "#ffffff",
          size: 14,
          face: "Arial",
        },
        color: {
          border: "#c4b5fd",
          background: "#4c1d95",
          highlight: {
            border: "#8b5cf6",
            background: "#5b21b6",
          },
          hover: {
            border: "#8b5cf6",
            background: "#5b21b6",
          },
        },
      },
      edges: {
        width: 2,
        color: {
          color: "rgba(139, 92, 246, 0.2)",
          highlight: "rgba(139, 92, 246, 0.5)",
          hover: "rgba(139, 92, 246, 0.5)",
        },
        smooth: {
          type: "continuous",
          roundness: 0.5,
        },
        hoverWidth: 3,
      },
      physics: {
        enabled: true,
        barnesHut: {
          gravitationalConstant: -8000,
          centralGravity: 0.3,
          springLength: 200,
          springConstant: 0.04,
          damping: 0.09,
          avoidOverlap: 0.1,
        },
        stabilization: {
          enabled: true,
          iterations: 1000,
          updateInterval: 100,
          onlyDynamicEdges: false,
          fit: true,
        },
      },
      interaction: {
        hover: true,
        hoverConnectedEdges: true,
        selectConnectedEdges: true,
        tooltipDelay: 200,
        zoomView: true,
        dragView: true,
        dragNodes: true,
        multiselect: true,
      },
      layout: {
        improvedLayout: true,
        hierarchical: {
          enabled: false,
          direction: "UD",
          sortMethod: "hubsize",
        },
      },
      height: "100%",
      width: "100%",
      autoResize: true,
      groups: networkData.categories, // Using the categories from our data
    };

    this.network = new Network(
      container,
      { nodes: this.nodes, edges: this.edges },
      options
    );

    this.network.on("click", (params) => {
      if (params.nodes.length > 0) {
        const nodeId = params.nodes[0];
        this.selectedNode = this.nodes.get(nodeId);
      } else {
        this.selectedNode = null;
      }
    });
  },
};
</script>

<style scoped>
.network-container {
  background: radial-gradient(
    circle at center,
    rgba(76, 29, 149, 0.7) 0%,
    rgba(76, 29, 149, 0.9) 100%
  );
}

:deep(.vis-network:focus) {
  outline: none;
}
</style>
