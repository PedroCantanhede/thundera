<template>
    <div class="accessible-tooltip-container">
      <!-- Ícone do Tooltip -->
      <div
        class="tooltip-icon"
        tabindex="0"
        @mouseenter="showTooltip"
        @mouseleave="hideTooltip"
        @focus="showTooltip"
        @blur="hideTooltip"
        aria-describedby="tooltip-content"
      >
        <span class="material-icons" aria-hidden="true">info</span>
      </div>
  
      <!-- Tooltip -->
      <div
        v-if="isVisible"
        id="tooltip-content"
        class="tooltip-box"
        role="tooltip"
      >
        <slot>
          {{ content }}
        </slot>
      </div>
    </div>
  </template>
  
  <script>
  import { useAnnouncer } from "@vue-a11y/announcer";
  
  export default {
    name: "AccessibleTooltip",
    props: {
      content: {
        type: String,
        default: "Este é um tooltip acessível.",
      },
    },
    data() {
      return {
        isVisible: false,
      };
    },
    methods: {
      showTooltip() {
        this.isVisible = true;
        this.announce(this.content);
      },
      hideTooltip() {
        this.isVisible = false;
      },
    },
    setup() {
      const { announce } = useAnnouncer();
      return { announce };
    },
  };
  </script>
  
  <style scoped>
  .accessible-tooltip-container {
    position: relative;
    display: inline-block;
  }
  
  .tooltip-icon {
    color: #7638c7;
    font-size: 32px; 
    cursor: pointer;
  }
  
  .tooltip-box {
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translate(-50%, -100%);
    background-color: #7638c7;
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    white-space: nowrap;
    font-size: 14px;
    z-index: 1000;
  }
  </style>
  