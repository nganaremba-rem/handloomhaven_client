import { AntDesign, EvilIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Container from '../../components/Container'
import LogoName from '../../components/LogoName'
import FeaturedList from '../../components/shop/FeaturedList'
import Carousel from '../../components/shop/Carousel'
import CartButton from '../../components/cart/CartButton'

export default function Shop() {
  const [isSearchWidthFull, setIsSearchWidthFull] = useState(false)
  const arr = []
  for (let i = 0; i < 4; i++) arr.push(i)

  const featuredData = arr.map((_, index) => ({
    name: `Product ${index + 1}`,
    id: `handloom_photos_random_${index + 1}`,
    price: Math.floor(700 + Math.random() * 4000),
  }))

  const offerData = arr.map((_, index) => ({
    name: `Product ${index + 5}`,
    id: `handloom_photos_random_${index + 5}`,
    price: Math.floor(700 + Math.random() * 4000),
  }))

  const carouselData = arr.map((_, index) => ({
    name: `Product ${index + 10}`,
    id: `handloom_photos_random_${index + 10}`,
    price: Math.floor(700 + Math.random() * 4000),
  }))

  const toggleSearchWidth = () => setIsSearchWidthFull((prev) => !prev)

  return (
    <>
      <SafeAreaView>
        <View className='flex-row items-center px-7 justify-between bg-[#F3EEF2] '>
          <View
            className={`shadow-lg py-4 bg-[#F3EEF2] ${
              isSearchWidthFull && 'hidden'
            }`}
          >
            <LogoName />
          </View>
          <View className='flex-row items-center gap-2 py-2 bg-[#F3EEF2]'>
            {!isSearchWidthFull && (
              <TouchableOpacity onPress={toggleSearchWidth}>
                <AntDesign name='search1' size={25} color='black' />
              </TouchableOpacity>
            )}
            <TextInput
              placeholder={'Search...'}
              type='search'
              className={`bg-slate-300 rounded-2xl px-4 py-2 transition-all ease-linear duration-1000 ${
                isSearchWidthFull ? 'flex-1 w-full' : 'w-0 p-0'
              }`}
            />
            {isSearchWidthFull && (
              <TouchableOpacity onPress={toggleSearchWidth}>
                <AntDesign name='close' size={25} color='black' />
              </TouchableOpacity>
            )}
          </View>
          <CartButton />
        </View>
      </SafeAreaView>
      <ScrollView>
        <Carousel data={carouselData} />
        <Container>
          <FeaturedList data={featuredData} listName={'Featured'} />
          <FeaturedList data={offerData} listName={'Offers'} />
          <FeaturedList data={offerData} listName={'Offers'} />
          <FeaturedList data={offerData} listName={'Offers'} />
        </Container>
      </ScrollView>
    </>
  )
}
