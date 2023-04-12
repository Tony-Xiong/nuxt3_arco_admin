<template>
  <a-space>
    <span>checkStrictly:</span>
    <a-switch v-model="rowSelection.checkStrictly" />
  </a-space>
  <a-table :columns="columns"  row-key="id" :data="data" v-model:expandedKeys="expandedKeys" :row-selection="rowSelection" style="margin-top: 20px"/>
</template>
<script setup>
import { reactive, ref } from "vue";

const menuStore = useMenuStore()
const expandedKeys = ref([]);


const rowSelection = reactive({
  type: 'checkbox',
  showCheckedAll: true,
  checkStrictly: true
});

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
  },
  {
    title: 'pid',
    dataIndex: 'pid',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Icon',
    dataIndex: 'icon',
  },
  {
    title: 'Type',
    dataIndex: 'type',
  },
  {
    title: 'URL',
    dataIndex: 'url',
  },
];
const data = menuStore.getTopMenuList
</script>