import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";

export interface ColorData {
    colorName: string;
    hexCode: string;
}
interface ColorPalettePreviewProps {
    paletteName: string;
    colorData: ColorData[];
    handlePress: () => void;
}
function ColorPalettePreview({ paletteName, colorData, handlePress }: ColorPalettePreviewProps) {
    return (
        <View style={{margin: 5}}>
            <TouchableOpacity
                onPress={handlePress}
            >
                <Text style={{fontWeight: '700', fontSize: 20}}>{paletteName}</Text>
                <View>
                    <FlatList
                        data={colorData.slice(0,5)}
                        keyExtractor={item => item.hexCode}
                        renderItem={({item}) => (
                            <View style={
                                {
                                    backgroundColor: item.hexCode,
                                    width: 35,
                                    height: 35,
                                    justifyContent: "center",
                                    margin: 2,
                                }
                            }>
                            </View>)}
                        horizontal={true}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default ColorPalettePreview;
