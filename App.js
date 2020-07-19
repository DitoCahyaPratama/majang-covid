import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import {
  IntroScreen,
  LoginScreen,
  RegisterScreen,
  BerandaScreen,
  NotifikasiScreen,
} from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function App() {
  const [data, setData] = useState({
    intro: false,
  });

  useEffect(() => {
    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem("intro");
        if (value !== null) {
          console.log(value);
          setData({
            ...data,
            intro: value,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };
    _retrieveData();
  }, []);

  const Stack = createStackNavigator();
  const Tabs = createBottomTabNavigator();
  const BerandaStack = createStackNavigator();
  const NotifikasiStack = createStackNavigator();
  // if (data.intro === "true") {
  //   return (
  //     // <LoginScreen />
  //     //     // <RegisterScreen />
  //     //     // <BerandaScreen />
  //     //     // <NotifikasiScreen />

  //     //     <NavigationContainer initial>
  //     //       <Stack.Screen name="IntroScreen" component={IntroScreen} initialRouteName="Intro" />
  //     //       <Stack.Screen name="Login" component={LoginScreen} />
  //     //     </NavigationContainer>
  //   )
  // }

  const NotifikasiStackScreen = () => (
    <NotifikasiStack.Navigator
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: "#8FFF00",
        // },
        // headerTintColor: "",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <NotifikasiStack.Screen
        name="NotifikasiScreen"
        component={NotifikasiScreen}
        options={{ title: "Notifikasi" }}
      />
    </NotifikasiStack.Navigator>
  );
  const TabScreen = () => (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "BerandaScreen") {
            iconName = focused ? "ios-home" : "ios-home";
          } else if (route.name === "NotifikasiScreen") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      // tabBarOptions={{
      //   activeTintColor: "#8FFF00",
      //   inactiveTintColor: "gray",
      // }}
    >
      <Tabs.Screen
        name="BerandaScreen"
        component={BerandaScreen}
        options={{ headerShown: false, title: "Home" }}
      />
      <Tabs.Screen
        name="NotifikasiScreen"
        component={NotifikasiStackScreen}
        options={{ headerShown: false, title: "Notifikasi" }}
      />
    </Tabs.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="IntroScreen"
          component={IntroScreen}
          initialRouteName="Intro"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BerandaScreen"
          component={TabScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
