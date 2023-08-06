import { View, Text, TextInput } from 'react-native'
import React from 'react'
import TextInputCustom from '../../components/TextInputCustom'
import ButtonCustom from '../../components/ButtonCustom'
import Container from '../../components/Container'
import BackButton from '../../components/BackButton'

const EditDisplayName = () => {
  return (
    <Container>
        <View className="flex-row items-center space-x-5 py-3 ">
            <BackButton to='Profile'/>
            <Text className="text-gray-700 font-bold text-xl">Edit Profile</Text>
        </View>
        <View className="mt-10 space-y-3 rounded-xl bg-slate-200 px-4 shadow drop-shadow py-5">
            <Text className="text-xl text-gray-700 font-bold">Display Name</Text>
            <TextInput className="px-3 text-lg py-2 bg-white shadow rounded-lg"/>
            <ButtonCustom text={"Save changes"}/>
        </View>
    </Container>
  )
}

export default EditDisplayName