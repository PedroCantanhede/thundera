<template>
    <div>
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Conteúdo da Tab 1</p>
          </TabPanel>
          <TabPanel>
            <p>Conteúdo da Tab 2</p>
          </TabPanel>
          <TabPanel>
            <p>Conteúdo da Tab 3</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </template>
  
  <script>
  import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'vue3-accessible-tabs';
  
  export default {
    name: 'AccessibleTabs',
    components: {
      Tabs,
      TabList,
      Tab,
      TabPanels,
      TabPanel,
    },
  };
  </script>
  
  <style scoped>
  /* Exemplo básico de estilos */
  .tab-list {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }
  
  .tab {
    padding: 8px 16px;
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .tab:focus {
    outline: none;
    border-color: #7638c7;
  }
  
  .tab[aria-selected='true'] {
    background: #7638c7;
    color: white;
    border-color: #7638c7;
  }
  
  .tab-panels {
    margin-top: 16px;
  }
  </style>
  