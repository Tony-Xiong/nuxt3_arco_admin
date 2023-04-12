<script setup lang="ts">
const isDark = useDark()
const toggleTheme = useToggle(isDark)
const handleToggleTheme = () => {
    if (!isDark.value) {
        document.body.removeAttribute('arco-theme')
    } else {
        document.body.setAttribute('arco-theme', 'dark')
    }
    toggleTheme();
};

const { toggle,isFullscreen } = useFullscreen();
</script>
<template>
    <p class="tool-icon"><component :is="isFullscreen? 'IconFullscreenExit':'IconFullscreen'" ref="el" @click="toggle()" /></p>
    <p class="tool-icon"><component :is="isDark? 'IconMoon':'IconSun'" @click="handleToggleTheme()" /></p>
</template>