import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import colors from '../../utils/colors'
import Container from '../../components/Container'
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import SingleShippingInfo from './shippinginfo/SingleShippingInfo'
import BackButton from '../../components/BackButton'
import { useNavigation } from '@react-navigation/native'
import { useFetch } from '../../hooks/useApi'
import { fetchImage } from '../../api'

const Checkout = () => {
  const [subtotal, setSubtotal] = useState(2000)
  const [taxes, setTaxes] = useState(50)

  const navigation = useNavigation()
  return (
    <>
      <SafeAreaView>
        <View
          className={`${colors.mainBgColor} flex-row space-x-5 items-center py-10 px-5`}
        >
          <BackButton to='ProductPage' />
          <Text className='text-2xl font-bold'>Checkout</Text>
        </View>
      </SafeAreaView>
      <Container>
        {/* Products */}
        <View className='bg-slate-200 shadow rounded-2xl px-4 py-8 relative my-3'>
          {/* Edit Icon */}
          <TouchableOpacity
            onPress={() => {}}
            className='bg-white rounded-lg p-2 absolute right-3 top-3'
          >
            <EditIcon />
          </TouchableOpacity>
          <Text className='font-bold text-lg'>Products</Text>
          <View className=' space-y-3 items-center'>
            <CheckoutProduct
              itemName={'Muka Phanek'}
              quantity={2}
              totalPrice={1000}
              url={'handloom_photos_random_14'}
            />
            <CheckoutProduct
              itemName={'Muka Phanek'}
              quantity={2}
              totalPrice={1000}
              url={'handloom_photos_random_20'}
            />
          </View>
        </View>
        {/* Shipping info */}
        <View className='bg-slate-200 shadow rounded-2xl px-4 py-8 relative'>
          {/* Edit Icon */}
          <TouchableOpacity
            onPress={() => {}}
            className='bg-white rounded-lg p-2 absolute right-3 top-3'
          >
            <EditIcon />
          </TouchableOpacity>
          <Text className='font-bold text-lg'>Shipping Information</Text>
          <View className='flex-row py-3 space-x-3 items-center'>
            <View className='-mt-1'>
              <Feather name='user' size={24} color='black' />
            </View>
            <Text className='text-gray-600'>John Doe</Text>
          </View>
          <View className='flex-row py-3 space-x-3 items-center'>
            <View className='-mt-1'>
              <Ionicons name='location-outline' size={24} color='black' />
            </View>

            <Text className='text-gray-600'>Kwakeithel Akham Leikai</Text>
          </View>
          <View className='flex-row py-3 space-x-3 items-center'>
            <View className='-mt-1'>
              <Feather name='phone' size={24} color='black' />
            </View>
            <Text className='text-gray-600'>1233583499</Text>
          </View>
        </View>

        {/* Payment Info */}
        <View className='bg-sky-200 shadow my-3 rounded-xl px-4 py-7 w-full relative'>
          <TouchableOpacity
            onPress={() => {}}
            className='bg-white rounded-lg p-2 absolute right-3 top-3'
          >
            <EditIcon />
          </TouchableOpacity>
          <View>
            <Text className='font-extrabold text-gray-700 text-lg'>
              Payment
            </Text>
          </View>
          <View className='flex-row items-center py-2 space-x-5 w-full'>
            <View>
              <AntDesign name='creditcard' size={20} color='black' />
            </View>
            <View className='flex-row items-center'>
              <View>
                <Text className='text-xs'>3284 2394 2348 2348</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Subtotal */}
        <View className='space-y-5 py-5'>
          <View className='flex-row justify-between items-center'>
            <Text className='text-gray-600'>Subtotal</Text>
            <Text className='text-gray-600'>Rs. {subtotal}</Text>
          </View>
          <View className='flex-row justify-between items-center'>
            <Text className='text-gray-600'>Taxes</Text>
            <Text className='text-gray-600'>Rs. {taxes}</Text>
          </View>
        </View>

        {/* Total Price */}
        <View className='flex-row justify-between items-center pt-5 pb-12'>
          <Text className='text-xl font-bold'>Total Price: </Text>
          <Text className='text-2xl font-bold'>Rs. {subtotal + taxes}</Text>
        </View>

        {/* Place order button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('OrderConfirmation')}
          className='bg-blue-600 rounded-lg px-5 py-4 mb-20'
        >
          <Text className='text-2xl font-bold text-center text-white'>
            Place Order
          </Text>
        </TouchableOpacity>
      </Container>
    </>
  )
}

function EditIcon() {
  return <AntDesign name='edit' size={24} color='black' />
}

function CheckoutProduct({ itemName, url, quantity, totalPrice }) {
  const { data } = useFetch('item', () => fetchImage(url))

  return (
    <View className='flex-row my-3 space-x-3 items-center'>
      <View className='-mt-1 w-10 h-10 overflow-hidden rounded-lg'>
        <Image className='w-full h-full' source={{ uri: data?.imageUrl }} />
      </View>
      <View className='flex-row justify-between items-center space-x-10'>
        <View>
          <Text className='text-gray-600'>{itemName}</Text>
          <Text className='text-gray-600'>x{quantity}</Text>
        </View>
        <Text className='font-bold'>Rs. {totalPrice}</Text>
        <TouchableOpacity className='p-2'>
          <Entypo name='cross' size={24} color='rgb(200, 12, 12)' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Checkout
