<script setup lang="ts">
const emit = defineEmits<{
  (e: 'wants-be-creator'): void
}>()
</script>
<template>
  <header class="w-full shadow">
    <nav class="bf-white px-4 lg:px-6 py-2.5">
      <div class="flex justify-center md:justify-between items-center mx-auto max-w-screen-xl">
        <NuxtLink to="/">
          <Logo />
        </NuxtLink>
        <div class="hidden md:flex items-center">
          <Button
            @click="() => emit('wants-be-creator')"
            label="Continuar como creator"
            icon-pos="right"
            icon="pi pi-arrow-right"
          ></Button>
        </div>
      </div>
    </nav>
  </header>
</template>
