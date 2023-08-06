import React from 'react'
import { Image, Text, View } from 'react-native'
import { fetchImage } from '../../api'
import { useFetch } from '../../hooks/useApi'

const OrderItem = ({
  id,
  itemName,
  quantity = 1,
  totalAmount,
  estimatedDeliveryDate,
}) => {
  const { data } = useFetch('images', () => fetchImage(id))

  return (
    <View className='bg-white flex-row space-x-4 my-2 rounded-lg'>
      {/* Image */}
      <View className='w-40 h-40 overflow-hidden rounded-lg'>
        <Image className='w-full h-full' source={{ uri: data?.imageUrl }} />
      </View>
      <View className='space-y-2'>
        <Text className='font-bold text-gray-700 pt-2'>{itemName}</Text>
        <Text className='text-gray-600'>x{quantity}</Text>
        <View className='bg-slate-200 py-2 px-1 rounded'>
          <Text className='text-blue-600 text-xs'>Delivery Date</Text>
          <Text className='text-xs text-gray-700'>{estimatedDeliveryDate}</Text>
        </View>
        <Text className='font-extrabold text-green-800'>Rs. {totalAmount}</Text>
      </View>
    </View>
  )
}

export default OrderItem
