import { useNavigation } from '@react-navigation/native'
import useAuthContext from './useAuthContext'

export default function useLogin() {
  const { setIsLoggedIn } = useAuthContext()
  // eslint-disable-next-line no-unused-vars
  const navigation = useNavigation()

  function login(_token = '') {
    setIsLoggedIn(true)
    // navigation.navigate('Shop')
  }

  return login
}
