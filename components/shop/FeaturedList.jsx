import React from 'react'
import { FlatList, Text, View } from 'react-native'
import FeaturedItem from './FeaturedItem'

const FeaturedList = ({ data, listName }) => {
  return (
    <View>
      <View>
        <Text className='text-xl font-bold text-gray-600 m-3'>{listName}</Text>
      </View>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={({ item: { id, name, price } }) => {
          return <FeaturedItem key={id} name={name} id={id} price={price} />
        }}
      />
    </View>
  )
}

export default FeaturedList
