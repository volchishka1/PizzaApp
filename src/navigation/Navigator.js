import React from "react";
import {ScreenTwo} from "../screens/screenTwo";
import {ScreenPizza} from "../screens/screenPizza";
import {ProfileScreen} from "../screens/profileScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home} from "../screens/home";
import {Basket} from "../screens/basket";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SvgBasket from "../assets/icons/BasketIcon";
import SvgMenu from "../assets/icons/MenuIcon";


export const Navigator = () => {

    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    const TabStack = () => {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name="Каталог"
                    component={Home}
                    options={{
                        tabBarLabel: "Каталог",
                        tabBarIcon: ({color, size, focused}) => (
                            <SvgMenu color={focused ? "orange" : "blue"}/>
                        )
                    }}/>
                <Tab.Screen
                    name="Корзина"
                    component={Basket}
                    options={{
                        tabBarLabel: "Корзина",
                        tabBarIcon: ({color, size, focused}) => (
                            <SvgBasket color={focused ? "orange" : "blue"}/>
                        )
                    }}/>
            </Tab.Navigator>
        )
    }


    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="App">
            <Stack.Screen name={"Tab"} component={TabStack}/>
            <Stack.Screen name="ScreenPizza" component={ScreenPizza}/>
            <Stack.Screen name="ScreenTwo" component={ScreenTwo}/>
            <Stack.Screen name={"ProfileScreen"} component={ProfileScreen}/>
        </Stack.Navigator>
    )
}