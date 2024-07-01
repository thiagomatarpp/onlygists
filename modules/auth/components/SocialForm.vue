<script setup lang="ts">
const emit = defineEmits<{
  (e: 'wants-login-with-github'): void
}>()
const props = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div class="flex flex-col gap-2 justify-center items-center bg-gray-50 rounded p-6"></div>
  <h2 class="font-[Inter] text-gray-700 font-regular">Entre com sua conta</h2>
  <Button
    :loading="props.loading"
    label="Continuar com github"
    icon="pi pi-github"
    icon-pos="right"
    @click="() => emit('wants-login-with-github')"
  />
</template>
