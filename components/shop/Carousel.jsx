import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from 'react-native'
import { fetchImage } from '../../api'
import { useFetch } from '../../hooks/useApi'

const Carousel = ({ data = [] }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const { width } = useWindowDimensions()

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <View className='relative items-center mb-5'>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CarouselImage imageId={item.id} name={item.name} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={({
          nativeEvent: {
            contentOffset: { x },
          },
        }) => {
          const index = Math.round(x / width)
          setCurrentSlideIndex(index)
        }}
      />
      <CarouselIndicator slides={data} currentSlideIndex={currentSlideIndex} />
    </View>
  )
}

function CarouselImage({ imageId }) {
  const { data } = useFetch('carousel', () => fetchImage(imageId))
  const { width } = useWindowDimensions()
  const navigation = useNavigation()

  const styles = StyleSheet.create({
    image: {
      resizeMode: 'cover',
    },
    imageContainer: {
      height: 250,
      width,
    },
  })

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('ProductPage')}
    >
      <View style={styles.imageContainer} className='justify-center flex-row'>
        <Image
          style={styles.image}
          className='object-cover rounded-xl h-full w-[95%]'
          source={{ uri: data?.imageUrl }}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

function CarouselIndicator({ slides, currentSlideIndex }) {
  return (
    <>
      <View className='flex-row items-center space-x-1 absolute -bottom-4'>
        {slides?.map((_, index) => {
          const width = currentSlideIndex === index ? 20 : 10
          return (
            <Animated.View
              key={index.toString()}
              style={{
                width,
              }}
              className={` h-2 rounded-full bg-slate-400 transition-all duration-1000`}
            ></Animated.View>
          )
        })}
      </View>
    </>
  )
}

export default Carousel
