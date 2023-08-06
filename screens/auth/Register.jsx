import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons'
import React, { useEffect, useReducer, useState } from 'react'
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import Container from '../../components/Container'
import LogoName from '../../components/LogoName'
import PasswordInputCustom from '../../components/PasswordInputCustom'
import TextInputCustom from '../../components/TextInputCustom'
import { useMutate } from '../../hooks/useApi'
import { register } from '../../api'
import { useNavigation } from '@react-navigation/native'
import useLogin from '../../hooks/useLogin'

const actions = {
  setEmail: 'setEmail',
  setPhoneNumber: 'setPhoneNumber',
  setPassword: 'setPassword',
  setFirstName: 'setFirstName',
  setLastName: 'setLastName',
  setStreet: 'setStreet',
  setCity: 'setCity',
  setPin: 'setPin',
  setConfirmPassword: 'setConfirmPassword',
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setEmail:
      return { ...state, email: action.payload }
    case actions.setFirstName:
      return { ...state, firstName: action.payload }
    case actions.setLastName:
      return { ...state, lastName: action.payload }
    case actions.setPassword:
      return { ...state, password: action.payload }
    case actions.setPhoneNumber:
      return { ...state, phoneNumber: action.payload }
    case actions.setStreet:
      return { ...state, address: { ...state.address, street: action.payload } }
    case actions.setCity:
      return { ...state, address: { ...state.address, city: action.payload } }
    case actions.setPin:
      return { ...state, address: { ...state.address, pin: action.payload } }
    case actions.setConfirmPassword:
      return { ...state, confirmPassword: action.payload }
    default:
      return state
  }
}

const initialValues = {
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  address: {
    street: '',
    city: '',
    pin: '',
  },
}

const Register = ({ navigation }) => {
  const bounce = {
    0: {
      translateY: 0,
    },
    0.5: {
      translateY: 10,
    },
    1: {
      translateY: 0,
    },
  }

  const [formData, dispatch] = useReducer(reducer, initialValues)
  const [errorMessage, setErrorMessage] = useState('')
  const [isPasswordMatched, setIsPasswordMatched] = useState(false)
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true)
  const [isValidate, setIsValidate] = useState(false)
  const { mutate, data, isLoading, isError, error } = useMutate(
    'register',
    (submittedData) => register(submittedData)
  )

  useEffect(() => {
    setErrorMessage(error)
  }, [isError])
  const login = useLogin()

  useEffect(() => {
    console.log(data)
    if (data) {
      if (data?.message === 'Registered Successfully!') {
        login()
      }
    }
  }, [data])

  // form validation
  useEffect(() => {
    const {
      email,
      phoneNumber,
      password,
      confirmPassword,
      firstName,
      lastName,
      address: { street, city, pin },
    } = formData

    if (password !== '' && confirmPassword !== '') {
      if (password === confirmPassword) {
        setIsPasswordMatched(true)
        setErrorMessage('')
      } else {
        setIsPasswordMatched(false)
        setErrorMessage('Password not match')
      }
    } else {
      setIsPasswordMatched(false)
      setErrorMessage('')
    }

    if (
      email &&
      phoneNumber &&
      firstName &&
      lastName &&
      street &&
      city &&
      pin
    ) {
      setIsValidate(true)
    } else {
      setIsValidate(false)
    }
  }, [formData])

  // Enable button if validation done
  useEffect(() => {
    if (isValidate && isPasswordMatched) {
      setIsSubmitButtonDisabled(false)
    } else {
      setIsSubmitButtonDisabled(true)
    }
  }, [isValidate, isPasswordMatched])

  const handleSubmit = () => {
    delete formData.confirmPassword
    mutate(formData)
  }

  const DynamicButton = isSubmitButtonDisabled
    ? TouchableWithoutFeedback
    : TouchableOpacity

  return (
    <Container>
      <View className={'items-center'}>
        <View className='justify-center items-center py-7 max-w-xs overflow-hidden'>
          <Animatable.Image
            animation={bounce}
            duration={1000}
            iterationCount={'infinite'}
            easing={'ease-in-back'}
            source={require('../../assets/logos/signup.png')}
            className='w-40 h-40'
          />
          <LogoName />
        </View>
      </View>
      <Text className='text-[#3a3842] font-[baloo2-extrabold] py-2 text-3xl'>
        Sign up
      </Text>

      {(!isPasswordMatched || isError) && (
        <View>
          <Text className='text-red-600 font-bold'>{errorMessage}</Text>
        </View>
      )}

      <View>
        <TextInputCustom
          textContentType='emailAddress'
          placeholder='Email'
          keyboardType='email-address'
          onChangeText={(text) =>
            dispatch({ type: actions.setEmail, payload: text })
          }
          Icon={<MaterialIcons name='alternate-email' size={24} color='#777' />}
        />
        <TextInputCustom
          onChangeText={(text) =>
            dispatch({ type: actions.setFirstName, payload: text })
          }
          textContentType='name'
          placeholder='First Name'
          keyboardType='default'
          Icon={<FontAwesome5 name='user' size={24} color='#777' />}
        />
        <TextInputCustom
          textContentType='name'
          placeholder='Last Name'
          keyboardType='default'
          onChangeText={(text) =>
            dispatch({ type: actions.setLastName, payload: text })
          }
          Icon={<FontAwesome5 name='user' size={24} color='#777' />}
        />
        <TextInputCustom
          textContentType='telephoneNumber'
          placeholder='Mobile'
          keyboardType='number-pad'
          onChangeText={(text) =>
            dispatch({ type: actions.setPhoneNumber, payload: text })
          }
          Icon={<MaterialIcons name='smartphone' size={24} color='#777' />}
        />
        <TextInputCustom
          textContentType='fullStreetAddress'
          placeholder='Address'
          keyboardType='default'
          onChangeText={(text) =>
            dispatch({ type: actions.setStreet, payload: text })
          }
          Icon={<FontAwesome name='address-book-o' size={24} color='#777' />}
        />
        <TextInputCustom
          textContentType='addressCity'
          placeholder='City'
          keyboardType='default'
          onChangeText={(text) =>
            dispatch({ type: actions.setCity, payload: text })
          }
          Icon={<MaterialIcons name='location-city' size={24} color='#777' />}
        />
        <TextInputCustom
          textContentType='postalCode'
          placeholder='PIN'
          keyboardType='number-pad'
          onChangeText={(text) =>
            dispatch({ type: actions.setPin, payload: text })
          }
          Icon={<Entypo name='location-pin' size={24} color='#777' />}
        />
        <PasswordInputCustom
          placeholder={'Password'}
          onChangeText={(text) =>
            dispatch({ type: actions.setPassword, payload: text })
          }
        />
        <PasswordInputCustom
          placeholder={'Confirm Password'}
          onChangeText={(text) =>
            dispatch({ type: actions.setConfirmPassword, payload: text })
          }
        />
      </View>

      <View className='py-10'>
        <Text className='font-[baloo2-medium] text-gray-600'>
          By signing up, you've agree to our Terms & Conditions and Privacy
          Policy
        </Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size={20} />
      ) : (
        <DynamicButton
          onPress={isSubmitButtonDisabled ? () => {} : handleSubmit}
        >
          <View
            className={`min-w-full rounded-xl ${
              isSubmitButtonDisabled ? 'bg-[#f2bccf]' : 'bg-[#EB5489]'
            }  px-10 py-5`}
          >
            <Text className='text-center font-[baloo2-bold] text-white text-xl tracking-wider'>
              Sign up
            </Text>
          </View>
        </DynamicButton>
      )}
      <View className='py-5 flex-row items-center justify-center'>
        <Text className='font-[baloo2-medium]  text-gray-600'>
          Already a member?{'  '}
        </Text>
        <TouchableOpacity
          className=' py-4 px-2'
          onPress={() => navigation.navigate('Login')}
        >
          <Text className='text-sky-700 font-[baloo2-bold]'>Login</Text>
        </TouchableOpacity>
      </View>
    </Container>
  )
}

export default Register
