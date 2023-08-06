import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import React, { forwardRef, useState } from 'react'
import { Pressable, View } from 'react-native'
import TextInputCustom from './TextInputCustom'

const PasswordInputCustom = forwardRef(
  (
    {
      placeholder = '',
      onChangeText = () => {},
      readOnly = false,
      onSubmitEditing = () => {},
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => setShowPassword((prev) => !prev)

    return (
      <View className={'flex flex-row items-center relative'}>
        <TextInputCustom
          ref={ref}
          readOnly={readOnly}
          placeholder={placeholder}
          textContentType='password'
          secureTextEntry={!showPassword}
          onChangeText={onChangeText}
          Icon={
            <MaterialCommunityIcons
              name='form-textbox-password'
              size={25}
              color={'#777'}
            />
          }
          onSubmitEditing={onSubmitEditing}
        />
        <View className='absolute right-0 h-full'>
          <Pressable
            className='h-full w-16 px-5 justify-center items-center'
            onPress={handleShowPassword}
          >
            <FontAwesome
              name={showPassword ? 'eye' : 'eye-slash'}
              size={20}
              color='#8f8f8f'
            />
          </Pressable>
        </View>
      </View>
    )
  }
)

//  forwardRef creates a new component based on the original one, you should ensure that this new component has a meaningful displayName.

PasswordInputCustom.displayName = 'PasswordInputCustom'

export default PasswordInputCustom
