import React from 'react'
import { ScrollView, StatusBar, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Container = ({
  children,
  statusbarColor,
  barStyle,
  bodyBackgroundColor,
}) => {
  return (
    <View className='flex-1'>
      <StatusBar
        backgroundColor={statusbarColor || '#F3EEF2'}
        barStyle={barStyle || 'dark-content'}
      />
      <SafeAreaView>
        <ScrollView
          className={`px-5 min-h-full relative ${
            bodyBackgroundColor || 'bg-[#F3EEF2]'
          }`}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Container
