import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import ColorBox from "../components/ColorBox.tsx";

function ColorPalette({navigation, route}) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList 
                data={route.params.data}
                renderItem={({item}) => <ColorBox 
                    style={{
                        textColor: parseInt(item.hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? "black" : "white",
                        backgroundColor: item.hexCode,
                        fontWeight: '700',
                    }}
                    text={item.colorName + " " + item.hexCode}
                />}
                keyExtractor={(item) => item.hexCode + item.colorName}
            />
        </SafeAreaView>
    );
}

export default ColorPalette;
