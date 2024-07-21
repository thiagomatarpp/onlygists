import { SupabaseClient } from '@supabase/supabase-js'

interface ServiceOptions{
  redirectToUrl: string;
}
export default (client: SupabaseClient, options: ServiceOptions) => ({
  async signInWithGithub(){
    return  await client.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: options.redirectToUrl
      }
    })
  },

  async signOut() {
    return client.auth.signOut
  }
})