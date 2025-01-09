<template>
  <div class="accessible-tabs">
    <ul class="tab-list" role="tablist">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab', { active: activeTab === index }]"
        role="tab"
        :aria-selected="activeTab === index"
        :aria-controls="'tab-panel-' + index"
        @click="selectTab(index)"
        tabindex="0"
      >
        {{ tab.label }}
      </li>
    </ul>
    <div
      v-for="(tab, index) in tabs"
      :key="'panel-' + index"
      :id="'tab-panel-' + index"
      class="tab-panel"
      role="tabpanel"
      v-show="activeTab === index"
    >
      {{ tab.content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AccessibleTabs",
  props: {
    tabs: {
      type: Array,
      required: true,
      validator: (value) =>
        value.every(
          (tab) =>
            typeof tab.label === "string" && typeof tab.content === "string"
        ),
    },
  },
  data() {
    return {
      activeTab: 0, // Índice da aba ativa
    };
  },
  methods: {
    selectTab(index) {
      this.activeTab = index;
    },
  },
};
</script>

<style scoped>
.accessible-tabs {
  width: 100%;
}

.tab-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 0 10px 0;
  border-bottom: 2px solid #ddd;
}

.tab {
  padding: 10px 20px;
  cursor: pointer;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-bottom: none;
}

.tab.active {
  background: #7638c7;
  color: #fff;
  font-weight: bold;
}

.tab-panel {
  padding: 20px;
  border: 1px solid #ddd;
}
</style>
