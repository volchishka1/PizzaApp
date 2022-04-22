import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {Container} from "../components/Container";
import {useNavigation} from "@react-navigation/native";


export const ScreenTwo = () => {
    const navigation = useNavigation();

    const handleNavigateToScreen = () => navigation.navigate('ScreenPizza');

    return (
        <Container showArrow={false}>
            {/*<Text>Шаурма</Text>*/}
            {/*<TouchableOpacity onPress={() => handleNavigateToScreen()}>*/}
            {/*    <Text>Пицца</Text>*/}
            {/*</TouchableOpacity>*/}
            <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                <Text>Назад к меню</Text>
            </TouchableOpacity>
        </Container>
    );
};