import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { Suspense } from 'react'
import { ActivityIndicator } from 'react-native'
import Container from './components/Container'
import AuthContextProvider from './context/AuthContext'
import StateContextProvider from './context/StateContext'
import Home from './screens/Home'
import Checkout from './screens/checkout/Checkout'
import OrderConfirmation from './screens/confirmation/OrderConfirmation'
import ChangePassword from './screens/profile/ChangePassword'
import EditDisplayName from './screens/profile/EditDisplayName'
import EditEmailPhone from './screens/profile/EditEmailPhone'
import ProductPage from './screens/shop/ProductPage'
import Cart from './screens/cart/Cart'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <AuthContextProvider>
      <StateContextProvider>
        <NavigationContainer>
          <Suspense
            fallback={
              <Container>
                <ActivityIndicator />
              </Container>
            }
          >
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                animation: 'slide_from_bottom',
                animationDuration: 300,
              }}
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="ProductPage" component={ProductPage} />
              <Stack.Screen name="Checkout" component={Checkout} />
              <Stack.Screen name="Cart" component={Cart} />
              <Stack.Screen
                name="OrderConfirmation"
                component={OrderConfirmation}
              />
              <Stack.Screen
                options={{
                  presentation: 'modal',
                }}
                name="EditDisplayName"
                component={EditDisplayName}
              />
              <Stack.Screen
                options={{
                  presentation: 'modal',
                }}
                name="EditEmailPhone"
                component={EditEmailPhone}
              />
              <Stack.Screen
                options={{
                  presentation: 'modal',
                }}
                name="ChangePassword"
                component={ChangePassword}
              />
            </Stack.Navigator>
          </Suspense>
        </NavigationContainer>
      </StateContextProvider>
    </AuthContextProvider>
  )
}
