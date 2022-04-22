import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {Container} from "../components/Container";
import {useNavigation} from "@react-navigation/native";


export const ProfileScreen = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <View style={{paddingLeft: 16}}>
                <TouchableOpacity onPress={() => navigation.navigate("ScreenPizza")}>
                    <Text style={{fontSize: 30}}>Пицца</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("ScreenTwo")}>
                    <Text style={{fontSize: 30}}>Шаурма</Text>
                </TouchableOpacity>
            </View>
        </Container>
    );
};