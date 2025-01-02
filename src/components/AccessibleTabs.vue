<template>
  <Tabs>
    <TabList>
      <Tab v-for="tab in tabs" :key="tab.id">{{ tab.label }}</Tab>
    </TabList>
    <TabPanels>
      <TabPanel v-for="tab in tabs" :key="tab.id">
        <p>{{ tab.content }}</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>

<script>
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'vue3-accessible-tabs';

export default {
  name: 'AccessibleTabs',
  props: {
    tabs: {
      type: Array,
      required: true,
      default: () => [
        { id: 1, label: 'Tab 1', content: 'Conteúdo da Tab 1' },
        { id: 2, label: 'Tab 2', content: 'Conteúdo da Tab 2' },
      ],
    },
  },
  components: {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
};
</script>
