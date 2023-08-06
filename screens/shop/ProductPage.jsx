import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import BackButton from '../../components/BackButton'
import QuantityChanger from '../../components/QuantityChanger'
import colors from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import CartButton from '../../components/cart/CartButton'
import { useFetch } from '../../hooks/useApi'
import { fetchImage } from '../../api'

const ProductPage = () => {
  const [price, setPrice] = useState(1000)
  const navigation = useNavigation()

  const { data } = useFetch('images', () =>
    fetchImage('handloom_photos_random_2')
  )

  return (
    <>
      <View className={`${colors.mainBgColor} p-3 relative`}>
        <View className='h-96 w-full relative'>
          <Image className='w-full h-full' source={{ uri: data?.imageUrl }} />
          <View className='absolute top-1 left-2'>
            <BackButton />
          </View>
          <View className='absolute top-1 right-2 bg-white rounded-lg p-2'>
            <CartButton />
          </View>
        </View>
        {/* Details area */}
        <View className='bg-white shadow rounded-3xl -mt-4 py-10 px-5 space-y-6'>
          <View>
            <Text className='text-3xl font-bold'>Rani Phi</Text>
          </View>
          <View>
            <Text className='text-gray-700'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores, cumque?z
            </Text>
          </View>
          <View>
            <QuantityChanger />
          </View>
          <View className='flex-row items-center justify-between'>
            <Text className='text-xl text-gray-600 font-extrabold'>
              Rs. {price}
            </Text>

            {/* Buy Now Button */}
            <TouchableOpacity
              onPress={() => {}}
              className='bg-sky-500 rounded-xl py-4 px-12'
            >
              <Text className='text-white font-bold'> Add to cart</Text>
            </TouchableOpacity>
          </View>
          {/* Buy Now Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Checkout')}
            className='bg-red-600 rounded-xl py-4 px-12'
          >
            <Text className='text-white text-center text-lg font-bold'>
              {' '}
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default ProductPage
