<script setup lang="ts">
import PublicHeadline from '~/modules/users/screens/components/PublicHeadline/PublicHeadline.vue'
import WidgetGroup from '~/modules/reports/components/Widgets/Group/Group.vue'
import WidgetCondensed from '~/modules/reports/components/Widgets/Condensed/Condensed.vue'
</script>

<template>
  <PublicHeadline class="my-10" />
  <WidgetGroup>
    <WidgetGroupLoader :loading="false" :amount="3">
      <WidgetCondensed :value="5" label="Gists do total" />
      <WidgetCondensed :value="2" label="Gists gratuitos" />
      <WidgetCondensed :value="3" label="Gists pagos" />
    </WidgetGroupLoader>
  </WidgetGroup>
</template>
