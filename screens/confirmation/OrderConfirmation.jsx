import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Container from '../../components/Container'
import BackButton from '../../components/BackButton'
import colors from '../../utils/colors'
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'

const OrderConfirmation = () => {
  const [total, setTotal] = useState(2050)
  const [noOfItems, setNoOfItems] = useState(2)
  const [estDelivery, setEstDelivery] = useState('12/02/24')
  return (
    <>
      <SafeAreaView>
        <View
          className={`flex-row items-center space-x-4 px-3 py-5 ${colors.mainBgColor}`}
        >
          <BackButton />
          <View>
            <Text className='text-xl font-bold text-gray-700'>
              Order overview
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <Container>
        <View
          style={{
            boxShadow: '10px 10px 10px 3px rgb(0 0 0 / 0.5)',
          }}
          className='relative w-full  bg-green-200 mt-16 rounded-2xl px-5 py-10'
        >
          <View
            style={{
              transform: 'translateX(-5px)',
            }}
            className={`bg-green-300 border-[3px] absolute -top-7  left-1/2  border-white w-14 h-14 justify-center items-center rounded-full`}
          >
            <Entypo name='thumbs-up' size={40} color='white' />
          </View>
          <View className='pb-6'>
            <Text className='text-center font-bold text-gray-800 text-xl'>
              Thank you for you order!
            </Text>
            <Text className='text-center text-gray-700'>
              The order confirmation has been sent to your email address
            </Text>
          </View>
          <View className='flex-row items-center justify-between'>
            <SubInfo label={'Total amount'} value={`Rs. ${total}`} />
            <SubInfo label={'Items ordered'} value={noOfItems} />
            <SubInfo label={'Est. Delivery'} value={estDelivery} />
          </View>
        </View>

        <View className='mt-10'>
          <Text className='font-bold text-xl text-gray-700 py-2'>
            How do you like our app?
          </Text>
          <TouchableOpacity className='flex-row items-center my-2 space-x-5 border border-1 px-5 border-slate-200 py-2 rounded-lg'>
            <AntDesign name='staro' size={24} color='black' />
            <Text className='text-lg'>Rate our application</Text>
          </TouchableOpacity>
          <TouchableOpacity className='flex-row items-center space-x-5 my-2 border border-1 px-5 border-slate-200 py-2 rounded-lg'>
            <MaterialIcons name='feedback' size={24} color='black' />
            <Text className='text-lg'>Leave a feedback</Text>
          </TouchableOpacity>
        </View>
      </Container>
    </>
  )
}

function SubInfo({ label, value }) {
  return (
    <>
      <View>
        <Text className='font-bold text-center'>{value}</Text>
        <Text className='text-slate-600 text-center'>{label}</Text>
      </View>
    </>
  )
}

export default OrderConfirmation
