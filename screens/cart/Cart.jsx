import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import BackButton from '../../components/BackButton'
import Container from '../../components/Container'
import CartItem from '../../components/cart/CartItem'
import { useNavigation } from '@react-navigation/native'

const Cart = () => {
  const [noOfItems, setNoOfItems] = useState(4)
  const [totalPrice, setTotalPrice] = useState(1000)
  const navigation = useNavigation()

  const arr = []

  for (let i = 0; i < 4; i++) arr.push(i)

  const featuredData = arr.map((_, index) => ({
    name: `Product ${index + 1}`,
    id: `handloom_photos_random_${index + 1}`,
    price: Math.floor(700 + Math.random() * 4000),
  }))

  return (
    <>
      <SafeAreaView>
        <View className='flex-row p-2 items-center justify-between bg-[#F3EEF2]'>
          <BackButton />
          <View>
            <Text className='font-bold text-center'>{noOfItems} Items</Text>
          </View>
          <View className='px-2'>
            <MaterialCommunityIcons
              name='filter-menu'
              size={24}
              color='black'
            />
          </View>
        </View>
      </SafeAreaView>
      <Container>
        <View className='py-3'>
          <Text className='text-xl font-bold'>My Cart</Text>
        </View>
        <View className='pb-48'>
          {featuredData?.map((cartItem) => {
            return (
              <CartItem
                key={cartItem.id}
                imageUrl={cartItem.id}
                itemName={'Muka Fanek'}
                category='Fanek'
                quantity={2}
                price={100}
              />
            )
          })}
        </View>
      </Container>

      <View className='absolute bottom-0 w-full'>
        <View className='bg-sky-300 flex-row p-4 mb-5 mx-5 shadow-xl items-center justify-between rounded-2xl space-x-5'>
          <View>
            <Text className='text-gray-700 font-bold'>Total amount</Text>
            <Text className='text-gray-900 font-extrabold text-2xl'>
              Rs. {totalPrice}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Checkout')}
            className='bg-orange-600 rounded-full py-2 px-4'
          >
            <Text className='text-white text-xl  font-extrabold'>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Cart
