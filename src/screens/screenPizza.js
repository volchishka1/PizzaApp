import React from "react";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Container} from "../components/Container";
import PizzaContainer, {styles} from "../components/PizzaContainer";


export const ScreenPizza = () => {
    const navigation = useNavigation();

    const handleNavigateToScreen = () => navigation.navigate('ScreenTwo');

    return (
        <Container showArrow={false}>
            {/*<Text>Пицца</Text>*/}
            {/*<TouchableOpacity onPress={() => handleNavigateToScreen()}>*/}
            {/*    <Text>Шаурма</Text>*/}
            {/*</TouchableOpacity>*/}
            <View style={{height: "100%", width: "100%"}}>
                <ScrollView style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                    <Text>Назад к меню</Text>
                </TouchableOpacity>
                <PizzaContainer />
                </ScrollView>
            </View>
        </Container>
    );
};