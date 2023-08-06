import React from 'react'
import { Text, View } from 'react-native'

const LogoName = () => {
  return (
    <View className='flex-row items-center text-center'>
      <Text className='text-orange-600 text-4xl font-[sigmar]'>H</Text>
      <Text className='font-[poppins] -my-1 self-start text-2xl text-[#3a3842] font-bold'>
        andloom
      </Text>
      <Text className='text-sky-600 text-4xl font-[sigmar]'>H</Text>
      <Text className='font-[poppins] -my-1 self-start  text-2xl text-[#3a3842] font-bold'>
        a
      </Text>
      <Text className='text-green-600 text-4xl font-[sigmar]'>V</Text>
      <Text className='font-[poppins] -my-1 self-start  text-2xl text-[#3a3842] font-bold'>
        en
      </Text>
    </View>
  )
}

export default LogoName
