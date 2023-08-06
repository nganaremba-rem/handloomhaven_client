import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Axios, { fetchImage } from '../../api'
import endpoints from '../../endpoints'
import { useFetch, useMutate } from '../../hooks/useApi'

const FeaturedItem = ({
  name,
  id,
  categoryName = 'No category',
  price = 'Rs. 0',
}) => {
  const navigation = useNavigation()

  const { data } = useFetch('images', () => fetchImage(id))

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductPage')}
      className={`bg-white rounded-xl overflow-hidden  mx-2`}
    >
      <View className='w-40 h-40 overflow-hidden'>
        <Image
          className='h-full w-full object-cover'
          source={{ uri: data?.imageUrl }}
          loadingIndicatorSource={require('../../assets/test.png')}
        />
      </View>
      <View className='px-3 py-2'>
        <Text className='text-rose-700 font-bold'>
          {data?.categoryName || categoryName}
        </Text>
        <Text className='text-gray-600 text-lg font-bold w-full overflow-hidden whitespace-nowrap'>
          {data?.name || name}
        </Text>
        <Text className='text-gray-800 text-sm font-bold'>
          Rs. {data?.price || price}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default FeaturedItem
