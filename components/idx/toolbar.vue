<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

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

const { toggle } = useFullscreen();
</script>
<template>
    <p class="tool-icon"><IconFullscreen ref="el" @click="toggle()" /></p>
    <p class="tool-icon"><component :is="isDark? 'IconMoon':'IconSun'" @click="handleToggleTheme()" /></p>
</template>