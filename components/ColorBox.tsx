import React from "react";
import { View, Text, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";

function ColorBox({ style, text }: { style: any, text: string }) {
    const styles = StyleSheet.create({
        box: {
            backgroundColor: style.backgroundColor,
            color: style.textColor,
        },
        color: {
            color: style.textColor,
            fontWeight: '700'
        }
    })
    return (
        <View style={[ tw`p-5 m-2 flex items-center justify-center`, styles.box]}>
            <Text style={styles.color}>{text}</Text>
        </View>
    );
}

export default ColorBox
