<template>
  <template v-if="hasChildren">
    <a-sub-menu :key="item.id">
        <template #title>{{item.name}}</template>
        <template #icon>
          <i v-if="isFa" :class="item.icon" />
          <icon v-else-if="isNotEmpty" :name="item.icon" />
          <icon v-else name="bi:grid-fill" />
        </template>
        <template v-for="child in item.children">
          <idx-menu-item :item="child" :parent-breadcrumb="next" />
        </template>
    </a-sub-menu>
  </template>
  <template v-else>
    <NuxtLink :to="item.url" @click="updateActiveSideMenu(item,next)" >
        <a-menu-item :key="item.url">
          <i v-if="isFa" :class="item.icon" />
          <icon v-else-if="isNotEmpty" :name="item.icon" />
          <icon v-else name="material-symbols:flash-on-rounded" />
          {{item.name}}</a-menu-item>
    </NuxtLink>
  </template>
</template>
<script setup lang="ts">
const { item,parentBreadcrumb } = defineProps<{
  item: IMenuItem,
  parentBreadcrumb: Array<string>
}>()
const hasChildren = computed(() => item.children && item.children.length > 0)
const menuStore = useMenuStore()
const updateActiveSideMenu = (item: IMenuItem, breadcrumb: string[])=>{
  menuStore.setActiveSideMenu(item.id,breadcrumb,item.url)
}
const next = new Array<string>()
if (parentBreadcrumb.length > 0) {
  next.push(...parentBreadcrumb)
}
next.push(item.name)
const isFa = item.icon && item.icon.startsWith('fa')
const isNotEmpty = item.icon && item.icon.trim() != ''
</script>