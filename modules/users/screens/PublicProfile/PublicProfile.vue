<script setup lang="ts">
import PublicHeadline from '@/modules/users/screens/components/PublicHeadline/PublicHeadline.vue'
import WidgetGroup from '@/modules/reports/components/Widgets/Group/Group.vue'
import WidgetGroupLoader from '@/modules/reports/components/Widgets/Group/Loader.vue'
import WidgetCondensed from '@/modules/reports/components/Widgets/Condensed/Condensed.vue'
import GistsCardGroup from '@/modules/gists/components/Card/Group/Group.vue'
import GistsCardGroupLoader from '@/modules/gists/components/Card/Group/Loader.vue'
import GistsCardItem from '@/modules/gists/components/Card/Item/Item.vue'

const route = useRoute()
const router = useRouter()

const handleNavigateToDetail = (id: string) => {
  const { username } = route.params
  router.push(`/${username}/gist/${id}`)
}
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

  <WidgetDefault title="Todos os gists">
    <GistsCardGroup>
      <GistsCardGroupLoader :loading="false">
        <GistsCardItem
          @tap="handleNavigateToDetail"
          v-for="n in 10"
          :key="n"
          id="123"
          title="useCurrentUser"
          description="Hook para controlar a **store** do usuario"
          :price="10"
          lang="typescript"
        />
      </GistsCardGroupLoader>
    </GistsCardGroup>
  </WidgetDefault>
</template>
