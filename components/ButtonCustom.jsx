import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonCustom = ({text, custFnc=() => {}}) => {
  return (
    <TouchableOpacity className="flex-row mt-5"  onPress={custFnc}>
        <View className="bg-blue-600 px-3 py-2 drop-shadow rounded-xl">
            <Text className="text-xl text-white">{text}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ButtonCustom