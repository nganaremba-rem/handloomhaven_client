import React, { forwardRef } from 'react'
import { TextInput, View } from 'react-native'

const TextInputCustom = forwardRef(
  (
    {
      Icon,
      placeholder = '',
      textContentType = '',
      secureTextEntry = false,
      keyboardType = 'default',
      onSubmitEditing = () => {},
      onChangeText = () => {},
      readOnly = false,
    },
    ref
  ) => {
    return (
      <View className='flex-row items-center space-x-3 my-1'>
        <View>{Icon}</View>
        <TextInput
          readOnly={readOnly}
          ref={ref}
          placeholderTextColor={'#888'}
          className={`px-5 ${
            textContentType === 'password' && 'pr-14'
          } flex-1 text-[#3a3842] border-b-2 border-b-zinc-200 focus:border-b-blue-600 text-lg py-3`}
          placeholder={placeholder}
          textContentType={textContentType}
          secureTextEntry={secureTextEntry}
          onSubmitEditing={onSubmitEditing}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
        />
      </View>
    )
  }
)

TextInputCustom.displayName = 'TextInputCustom'

export default TextInputCustom
