import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { fetchImage } from '../../api'
import { useFetch } from '../../hooks/useApi'
import QuantityChanger from '../QuantityChanger'

const CartItem = ({
  imageUrl,
  itemName,
  quantity,
  price,
  category = 'Shawl',
}) => {
  const { data } = useFetch('images', () => fetchImage(imageUrl))

  return (
    <View className='bg-white p-2 m-2 rounded-lg relative'>
      <TouchableOpacity className='absolute top-2 right-2'>
        <Ionicons name='ios-trash-bin' size={26} color='rgb(200, 10, 10)' />
      </TouchableOpacity>
      <View className='py-2 px-3'>
        <Text className='text-gray-600 text-sm'>{category}</Text>
        <Text className='text-gray-900 font-bold text-xl'>{itemName}</Text>
      </View>
      <View className='flex-row px-3'>
        <View className='w-36 h-36  rounded-lg overflow-hidden'>
          <Image className='w-full h-full' source={{ uri: data?.imageUrl }} />
        </View>
        <View className='justify-between px-4 py-2'>
          <View>
            <Text className='font-bold py-2 text-gray-700'>Size</Text>
            <QuantityChanger />
          </View>
          <View>
            <Text className='font-bold text-rose-800'>
              Rs. {price * quantity}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CartItem
