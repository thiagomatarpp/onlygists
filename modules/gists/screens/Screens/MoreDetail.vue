<script setup lang="ts">
import PublicHeadLine from '@/modules/gists/components/PublicHeadLine/PublicHeadLine.vue'
import GistCodeSnippet from '~/modules/gists/components/CodeSnippet/CodeSnippet.vue'
import LazyDialogPaymentSuccess from '~/modules/payments/components/DialogPaymentSuccess/DialogPaymentSuccess.vue'
import LazyDialogPaymentError from '~/modules/payments/components/DialogPaymentError/DialogPaymentError.vue'
const route = useRoute()
const isPaymentSuccessfully = ref<boolean>(false)
const isPaymentFail = ref<boolean>(false)

onMounted(() => {
  const { fail_payment, success_payment } = route.query
  if(success_payment) {
    isPaymentSuccessfully.value = true
  }
  if(fail_payment) {
    isPaymentFail.value = true
  }
})
</script>

<template>
  <PublicHeadLine />
  <GistCodeSnippet />
  <LazyDialogPaymentSuccess v-model:visible="isPaymentSuccessfully"/>
  <LazyDialogPaymentError v-model:visible="isPaymentFail"/>
</template>
