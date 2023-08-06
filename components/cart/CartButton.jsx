import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'

const CartButton = ({ withBackground = false }) => {
  const navigation = useNavigation()

  if (withBackground) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        className='absolute top-1 right-2 bg-white rounded-lg p-2'
      >
        <CardIcon />
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
      <CardIcon />
    </TouchableOpacity>
  )
}

function CardIcon() {
  return (
    <View className='flex-row'>
      <FontAwesome5 name={'shopping-cart'} size={20} color={'black'} />
    </View>
  )
}

export default CartButton
