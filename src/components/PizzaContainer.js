import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {CardItem} from "./CardItem";
import SearchIcon from "../assets/icons/SearchIcon";


export const pizzaData = [
    {
        id: 1,
        name: "Маргарита",
        price: 14.99,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/a1d62d94af274a26b827ae972fca4676_292x292.jpeg",
    },
    {
        id: 2,
        name: "Чикен-Бомбино",
        price: 21.99,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/5a21e538cafd4fc09cbca79cc68680a2_292x292.jpeg",
    },
    {
        id: 3,
        name: "Карбонара",
        price: 24.99,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/82084271adaf432a8c3810a6ce84d21e_292x292.jpeg",
    },
    {
        id: 4,
        name: "Домашняя",
        price: 14.99,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/a1d62d94af274a26b827ae972fca4676_292x292.jpeg",
    },
    {
        id: 5,
        name: "Додо",
        price: 21.99,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/155b1690243645baa518635449845997_292x292.jpeg",
    },
    {
        id: 6,
        name: "Аррива",
        price: 24.99,
        image: "https://dodopizza-a.akamaihd.net/static/Img/Products/3ac04ddf2254420d93648a91aa86bbe4_292x292.jpeg",
    },
]


const PizzaContainer = () => {
    const [product, setProduct] = useState("");
    const [text, setText] = useState("");

    return (
        <View style={{flex: 1}}>
            <View>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={(event) => setProduct(event)}
                    value={product}
                />
                <TouchableOpacity onPress={() => setText(product)}
                                  style={styles.iconContainer}>
                    <SearchIcon/>
                </TouchableOpacity>
            </View>

            {text != '' &&
                <Text style={{marginTop: 15}}>... поиск по {text}</Text>
            }

            <View style={styles.imgContainer}>
                {pizzaData.map((pizza, index) => (
                    <CardItem key={index} text={pizza.name} img={pizza.image}
                              price={pizza.price}/>
                ))}
            </View>

            <TouchableOpacity style={styles.orderBtn}>
                <Text style={{
                    textAlign: "center",
                    color: "#FFF",
                    fontSize: 16,
                    fontWeight: "500"
                }}>Создать заказ</Text>
            </TouchableOpacity>
            {/*</ScrollView>*/}
        </View>
    );
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: "#FFF",
        paddingHorizontal: 15,
    },
    text: {
        fontSize: 24,
        marginTop: 15,
        fontWeight: "700",
    },
    textDes: {
        fontSize: 16,
        color: "gray",
    },
    imgContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    orderBtn: {
        marginTop: 15,
        marginBottom: 30,
        width: "100%",
        paddingVertical: 16,
        backgroundColor: "orange",
        borderRadius: 8,
    },
    input: {
        height: 46,
        marginTop: 15,
        borderWidth: 4,
        padding: 10,
        borderColor: "orange",
    },
    iconContainer: {
        position: "absolute",
        top: 25,
        right: 10,
    }
});

export default PizzaContainer;