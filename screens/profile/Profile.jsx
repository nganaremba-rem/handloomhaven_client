import { View, Text, TouchableOpacity, SafeAreaView, Image } from "react-native";
import React from "react";
import useLogout from "../../hooks/useLogout";
import BackButton from "../../components/BackButton";
import Container from "../../components/Container";
import ProfileDetailsCard from "../../components/profile/ProfileDetailsCard";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const logout = useLogout()
  const navigation = useNavigation()
  return (
    <>
      <SafeAreaView>
        <View className={`flex-row items-center p-3 ${colors.mainBgColor}`}>
          <BackButton />
          <View className="p-4">
            <Text className="text-xl font-extrabold text-gray-700">My Account</Text>
          </View>
        </View>
      </SafeAreaView>
      <Container>
        <View className="space-y-6">
          {/* Profile Pic & Name */}
          <View className="py-4 items-center flex-row shadow">
              <View className="rounded-full w-32 h-32 overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  source={require("../../assets/test.png")}
                />
              </View>
              <View className="px-4">
                <Text className="text-2xl font-extrabold">John Doe</Text>
              </View>
          </View>
          {/* Details */}
          <View className="bg-white rounded-lg shadow">
            <ProfileDetailsCard editUrl={"EditDisplayName"} label={"Display Name"} value={"John Doe"} />
            <ProfileDetailsCard editUrl={"EditEmailPhone"} label={"Email/Phone"} value={"johndoe@gmail.com"} />
            <ProfileDetailsCard editUrl={"ChangePassword"} label={"Password"} value={"******"} buttonName="Change" />
          </View>

        {/* Logout Button */}
          <TouchableOpacity onPress={() => logout()} className="bg-rose-600 shadow rounded-lg py-2">
            <Text className="text-2xl font-bold text-white text-center">Sign Out</Text>
          </TouchableOpacity>
        </View>
      </Container>
    </>
  );
}
