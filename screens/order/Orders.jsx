import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import BackButton from '../../components/BackButton'
import Container from '../../components/Container'
import OrderItem from '../../components/order/OrderItem'
import colors from '../../utils/colors'

export default function Orders() {
  const arr = []
  for (let i = 0; i < 9; i++) arr.push(i)

  const featuredData = arr.map((_, index) => ({
    name: `Product ${index + 1}`,
    id: `handloom_photos_random_${index + 1}`,
    price: Math.floor(700 + Math.random() * 4000),
  }))

  return (
    <>
      {/* Heading */}
      <SafeAreaView>
        <View className={`${colors.mainBgColor} flex-row items-center p-3`}>
          <BackButton />
          <Text className='text-lg font-bold px-5 text-gray-800'>
            My Orders
          </Text>
        </View>
      </SafeAreaView>
      {/* Main */}
      <Container>
        {featuredData?.map((order) => {
          return (
            <OrderItem
              key={order.id}
              id={order.id}
              imageUrl={''}
              itemName={order.name}
              totalAmount={order.price}
              estimatedDeliveryDate={'20th December'}
            />
          )
        })}
      </Container>
    </>
  )
}
