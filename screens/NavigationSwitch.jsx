import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from './cart/Cart'
import { useNavigation } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const NavigationSwitch = () => {
    const navigation = useNavigation()
  return (
    <Stack.Navigator>
        <Stack.Screen name='Cart' component={Cart} />
    </Stack.Navigator>
  )
}

export default NavigationSwitch