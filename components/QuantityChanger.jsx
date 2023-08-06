import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const QuantityChanger = () => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => setQuantity(prev => prev + 1)
    const decrementQuantity = () => setQuantity(prev =>  {
        if(prev !== 1) {
            return prev - 1;
        } else {
            return 1
        }
    })

  return (
    <View className="flex-row items-center gap-8">
        <TouchableOpacity onPress={decrementQuantity}  className="bg-teal-500 h-10 w-10 items-center justify-center rounded"><Text className="text-white -mt-1">-</Text></TouchableOpacity>
        <View>
            <Text>{quantity}</Text>
        </View>
        <TouchableOpacity onPress={incrementQuantity} className="bg-teal-500 h-10 w-10 items-center justify-center rounded"><Text className="text-white -mt-1">+</Text></TouchableOpacity>
    </View>
  )
}

export default QuantityChanger