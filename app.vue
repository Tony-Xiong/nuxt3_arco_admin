<script setup>
const config = useAppConfig()
console.log(config.title)
</script>

<template>
  <div>
      <NuxtLayout>
          <NuxtPage />
      </NuxtLayout>
  </div>
</template>
