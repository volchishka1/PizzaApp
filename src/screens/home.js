import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Container} from "../components/Container";


export const Home = () => {
    const navigation = useNavigation();

    return (
        <Container showArrow={false}>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
            <Text style={{padding: 16}}>Выбор меню</Text>
            </TouchableOpacity>
        </Container>
    );
};