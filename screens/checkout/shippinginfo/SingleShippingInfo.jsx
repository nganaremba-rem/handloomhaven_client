import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const SingleShippingInfo = ({Icon, value}) => {
  return (
    <View className="flex-row py-3 space-x-3 items-center">
        <View className="-mt-1">
            <Icon />
        </View>
        <Text>{value}</Text>
    </View>
  )
}

export default SingleShippingInfo