<template>
    <div class="accessible-list" role="list" tabindex="0" @keydown="handleKeydown">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="list-item"
        :class="{ selected: selectedIndex === index }"
        role="listitem"
        @click="selectItem(index)"
        @focus="selectItem(index)"
        tabindex="-1"
      >
        <slot name="item" :item="item">{{ item }}</slot>
      </div>
    </div>
  </template>
  
  <script>
  import { useAnnouncer } from "@vue-a11y/announcer";
  
  export default {
    name: "AccessibleList",
    props: {
      items: {
        type: Array,
        required: true,
      },
      initialIndex: {
        type: Number,
        default: 0,
      },
    },
    data() {
      return {
        selectedIndex: this.initialIndex,
      };
    },
    watch: {
      selectedIndex(newIndex) {
        const item = this.items[newIndex];
        this.announce(`Item selecionado: ${item}`);
        this.$emit("item-selected", item);
      },
    },
    methods: {
      handleKeydown(event) {
        if (event.key === "ArrowDown") {
          this.selectNextItem();
          event.preventDefault();
        } else if (event.key === "ArrowUp") {
          this.selectPreviousItem();
          event.preventDefault();
        }
      },
      selectItem(index) {
        this.selectedIndex = index;
      },
      selectNextItem() {
        if (this.selectedIndex < this.items.length - 1) {
          this.selectedIndex++;
        } else {
          this.selectedIndex = 0; // Loop back to the first item
        }
      },
      selectPreviousItem() {
        if (this.selectedIndex > 0) {
          this.selectedIndex--;
        } else {
          this.selectedIndex = this.items.length - 1; // Loop back to the last item
        }
      },
    },
    setup() {
      const { announce } = useAnnouncer();
      return { announce };
    },
  };
  </script>
  
  <style scoped>
  .accessible-list {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    background-color: #fff;
    outline: none;
  }
  
  .list-item {
    padding: 8px 12px;
    margin: 4px 0;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  .list-item:hover {
    background-color: #f0f0f0;
  }
  
  .list-item.selected {
    background-color: #7638c7;
    color: white;
  }
  </style>
  