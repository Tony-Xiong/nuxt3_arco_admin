<template>
    <div class="page-content">
        <a-space direction="vertical" class="page-content-space">
            <a-breadcrumb>
                <a-breadcrumb-item>
                    <icon-home/>
                </a-breadcrumb-item>
                <template v-for="i in title" >
                    <a-breadcrumb-item>{{i}}</a-breadcrumb-item>
                </template>
            </a-breadcrumb>
            <NuxtPage />
        </a-space>
    </div>
</template>
<script setup lang="ts">
const route = useRoute()
const menuStore = useMenuStore()
const defaultTitle = menuStore.activeSideMenu.breadcrumb
const title = ref(defaultTitle)
menuStore.$subscribe((mutation, state) => {
    const activeSideMenu = state.activeSideMenu;
    title.value = activeSideMenu.breadcrumb
})
</script>
<style>
.page-content {
    padding: 24px;
    width: 100%;
    height: 100%;
}
.page-content-space {
    width: 100%;
    height: 100%;
}
</style>