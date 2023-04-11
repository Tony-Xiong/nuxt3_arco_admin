<template>
    <a-layout-sider :collapsed="collapsed">
        <a-button
                :style="{ padding: '0 12px', height: '30px', lineHeight: '30px', marginBottom: '4px' }"
                type="primary"
                @click="toggleCollapse()"
                flex="right"
        >
            <icon-menu-unfold v-if="collapsed" />
            <icon-menu-fold v-else />
        </a-button>
        <a-menu :collapsed="collapsed" :default-selected-keys="defaultKeys">
            <idx-menu-item v-for="item in menuItems" :item="item"/>
        </a-menu>
    </a-layout-sider>
</template>
<script setup lang="ts">
const menuStore = useMenuStore()
const sideMenu = menuStore.getSideMenu;
const route = useRoute();
const defaultKeys = [route.fullPath];
const menuItems = ref(sideMenu && sideMenu.length > 0?sideMenu:[]);
const collapsed = ref(false);
menuStore.$subscribe((mutation, state) => {
    const activeTopMenu = state.activeTopMenu;
    const newSideMenu = state.topMenuList[activeTopMenu];
    menuItems.value = newSideMenu && newSideMenu['children'] && newSideMenu['children'].length > 0 ?newSideMenu['children']:[];
});
const toggleCollapse = () => { collapsed.value = !collapsed.value; }
</script>