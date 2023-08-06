import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import * as Animatable from "react-native-animatable";
import Cart from "./cart/Cart";
import Orders from "./order/Orders";
import Profile from "./profile/Profile";
import Shop from "./shop/Shop";

const Tab = createBottomTabNavigator();

const translate = {
  0: {
    translateY: 100,
  },
  1: {
    translateY: 0,
  },
};

const ShopTabNavigation = () => {
  return (
    <Animatable.View
      animation={translate}
      duration={350}
      className="flex-1 bg-[#F3EEF2]"
    >
      <Tab.Navigator
        screenOptions={({ route, navigation }) => {
          return {
            headerShown: false,
            animation: "slide_from_bottom",
            animationDuration: 200,
            tabBarIcon: ({ color, focused, size }) => {
              let iconName;
              switch (route.name) {
                case "Shop":
                  iconName = "store";
                  break;
                case "Profile":
                  iconName = "user-circle";
                  break;
                case "Order":
                  iconName = "bars";
                  break;
                case "Cart":
                  iconName = "shopping-cart";
                  break;
                default:
                  break;
              }

              return <FontAwesome5 name={iconName} size={20} color={color} />;
            },
            tabBarActiveBackgroundColor: "#EB5489",
            tabBarInactiveBackgroundColor: "white",
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "#777",
            headerShown: false,
            tabBarStyle: {
              height: 65,
              borderRadius: 100,
              overflow: "hidden",
              margin: 10,
            },
            tabBarLabelStyle: {
              fontFamily: "baloo2-extrabold",
            },
            tabBarItemStyle: {
              padding: 10,
            },
          };
        }}
      >
        <Tab.Screen name="Shop" component={Shop} />
        <Tab.Screen name="Order" component={Orders} />
        {/* <Tab.Screen name="Cart" component={Cart} /> */}
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </Animatable.View>
  );
};

export default ShopTabNavigation;
