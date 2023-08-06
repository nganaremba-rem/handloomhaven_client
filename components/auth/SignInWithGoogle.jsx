import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const SignInWithGoogle = () => {
  return (
    <View className={"rounded-lg flex-row mt-14 border border-1 border-white"}>
      <TouchableOpacity className=" min-w-full flex-row items-center gap-3 py-2 justify-center">
        <Image
          source={require("../../assets/logos/google.png")}
          className="w-10 h-10"
        />
        <Text className="font-[baloo2-bold] text-[#565656]">
          Sign in with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInWithGoogle;
