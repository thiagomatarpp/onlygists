export function useSession() {
  const user = useSupabaseUser()
  const services = useServices()

  const isLogged = () => {
    return Boolean(user.value)
  }
  const logout = async () => {
    return services.auth.signOut()
  }

  return {
    user,
    logout,
    isLogged,
  }
}
