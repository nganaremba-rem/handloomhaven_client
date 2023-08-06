import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'

const BackButton = ({to = "Shop"}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate(to)} className="flex-row">
        <View className="bg-white shadow drop-shadow rounded-lg p-2 w-max">
          <AntDesign name="back" size={24} color="black" />
        </View> 
    </TouchableOpacity>
  )
}

export default BackButton