import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ProfileDetailsCard = ({label, value, buttonName = "Edit", editUrl}) => {
  const navigation = useNavigation()
  return (
    <View className="rounded-xl py-6 px-7 my-1">
        <View>
            <View><Text className="text-gray-600">{label}</Text></View>
            <View className="flex-row items-center justify-between">
            <Text className="font-bold text-gray-600">{value}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(editUrl)} className="bg-gray-800 rounded-lg">
                <Text className="text-white px-5 py-1">{buttonName}</Text>
            </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default ProfileDetailsCard