<script setup lang="ts">
import SocialForm from '~/modules/auth/components/SocialForm.vue'
const loading = ref<boolean>(false)
const services = useServices();
const handlerGithubLogin = async () => {
  loading.value = true
  await services.auth.signInWithGithub();
}
</script>

<template>
  <section class="w-full h-full flex flex-col items-center justify-center gap-5 bg-gray-50">
    <Logo />
    <SocialForm :loading="loading" @wants-login-with-github="handlerGithubLogin" />
  </section>
</template>
