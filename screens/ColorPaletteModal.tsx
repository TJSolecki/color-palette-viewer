import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Alert, TouchableOpacity } from "react-native";
import { ColorData } from "../components/ColorPalettePreview.tsx";
import tw from "tailwind-react-native-classnames";
import ToggleColorSelction from "../components/ToggleColorSelection.tsx";

const COLORS: ColorData[] = [
  { colorName: 'AliceBlue', hexCode: '#F0F8FF' },
  { colorName: 'AntiqueWhite', hexCode: '#FAEBD7' },
  { colorName: 'Aqua', hexCode: '#00FFFF' },
  { colorName: 'Aquamarine', hexCode: '#7FFFD4' },
];

function ColorPaletteModal({ navigation }) {
    const [ paletteName, setPaletteName ] = useState<string>("");
    const [ selectedColors, setSelectedColors ] = useState<ColorData[]>([]);

    function handleSubmission() {
        if (selectedColors.length < 3) {
            return Alert.alert("Color palettes must have at least 3 colors");
        }
        if (!paletteName.trim()) {
            return Alert.alert("Please provide a name for your color palettte");
        }
        // pass color palette to go back route
        navigation.navigate("Home", { newPalette: { id: 0, paletteName, colors: selectedColors }});
    }

    return (
        <View style={tw`p-4`}>
            <Text>Name of your color palette</Text>
            <TextInput
                value={paletteName}
                onChangeText={setPaletteName}
                style={tw`w-full bg-white h-10 my-2 rounded-xl border border-gray-400`}
            />
            <FlatList
                data={COLORS}
                keyExtractor={(item) => item.hexCode}
                renderItem={({ item }) => (
                    <ToggleColorSelction 
                        item={item}
                        setSelectedColors={setSelectedColors}
                        selectedColors={selectedColors}
                    />
                )}
                ItemSeparatorComponent={() => <View style={tw`w-full border border-gray-300`}/>}
            />
            <TouchableOpacity
                onPress={handleSubmission}
            >
                <View style={tw`w-full bg-blue-500 flex flex-row justify-center
                                p-3 rounded-xl`}>
                    <Text style={tw`font-bold text-white`}>Add color palette</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default ColorPaletteModal;
