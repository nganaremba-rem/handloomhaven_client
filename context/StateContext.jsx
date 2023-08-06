import { useFonts } from 'expo-font'
import React, { createContext } from 'react'
import { ActivityIndicator } from 'react-native'
import Container from '../components/Container'

export const StateContext = createContext()

export default function StateContextProvider({ children }) {
  const [loaded] = useFonts({
    lobster: require('../assets/fonts/Lobster-Regular.ttf'),
    poppins: require('../assets/fonts/Poppins-Regular.ttf'),
    sigmar: require('../assets/fonts/Sigmar-Regular.ttf'),
    'baloo2-bold': require('../assets/fonts/static/Baloo2-Bold.ttf'),
    'baloo2-extrabold': require('../assets/fonts/static/Baloo2-ExtraBold.ttf'),
    'baloo2-medium': require('../assets/fonts/static/Baloo2-Medium.ttf'),
    baloo2: require('../assets/fonts/static/Baloo2-Regular.ttf'),
    'baloo2-semibold': require('../assets/fonts/static/Baloo2-SemiBold.ttf'),
  })

  if (!loaded)
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    )

  return (
    <StateContext.Provider
      value={{
        loaded,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
