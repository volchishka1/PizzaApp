import React from "react";
import {TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {SvgProfile} from "../assets/icons/ProfileIcon";



export const Container = (props) => {
    const {children, showArrow = true} = props;
    const navigation = useNavigation();

    return(
        <View style={{backgroundColor: "pink", height: "100%"}}>
            <View>
                {showArrow && (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{padding: 16}}>
                        <SvgProfile/>
                    </View>
                </TouchableOpacity>
                )}
            </View>
            <View>{children}</View>
        </View>

    )
}