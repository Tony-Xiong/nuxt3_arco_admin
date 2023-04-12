<script setup lang="ts">
definePageMeta({
    title: "htmls/HTML",
    description: "htmls/HTML",
    keywords: "htmls/HTML",})
const name = useRoute().params.slug
</script>

<template>
  <p>{{ name }}</p>
</template>
