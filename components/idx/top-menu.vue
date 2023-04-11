<template>
    <a-menu mode="horizontal" :default-selected-keys="selected">
      <a-menu-item v-for="(item, i) in list" :key="i+1" @click="showSideMenu(i)">
        <NuxtLink v-if="canLink(item)" :to="item.url">{{item.name}}</NuxtLink>
        <p v-else>{{item.name}}</p>
      </a-menu-item>
    </a-menu>
</template>
<script setup lang="ts">
const menuStore = useMenuStore()
const showSideMenu = (id:number)=>{
  menuStore.setActiveTopMenu(id)
}
menuStore.init()
const list = menuStore.getTopMenuList
const selected = []
selected.push(menuStore.activeTopMenu+1)
const canLink = (item:IMenuItem)=>{
  return item.url && item.url.trim() !== ''
}
</script>