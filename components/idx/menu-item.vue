<template>
  <template v-if="hasChildren">
    <a-sub-menu :key="item.id">
        <template #title>{{item.name}}</template>
        <template #icon><IconApps /></template>
        <template v-for="child in item.children">
          <idx-menu-item :item="child" />
        </template>
    </a-sub-menu>
  </template>
  <template v-else>
    <NuxtLink :to="item.url" @click="updateActiveSideMenu(item)" >
        <a-menu-item :key="item.url"><IconBulb />{{item.name}}</a-menu-item>
    </NuxtLink>
  </template>
</template>
<script setup lang="ts">
const { item } = defineProps({
  item: null
})
const hasChildren = computed(() => item.children && item.children.length > 0)
const menuStore = useMenuStore()
const updateActiveSideMenu = (item: any)=>{
  menuStore.setActiveSideMenu(item.id,[item.name],item.url)
}
</script>