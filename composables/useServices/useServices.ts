import AuthService from '@/modules/auth/services/auth.service'
import type { Database } from '@/libs/supabase/schema'

export function useServices() {
  const supabaseClient = useSupabaseClient<Database>()
  const config = useRuntimeConfig() ;
  return {
    auth: AuthService(supabaseClient, {
      redirectToUrl: `${config.public.siteUrl}/auth/github`
    })
  }
}