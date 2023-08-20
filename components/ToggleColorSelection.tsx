import React, { SetStateAction, useMemo } from "react";
import { ColorData } from "./ColorPalettePreview";
import { View, Text, Switch } from "react-native";
import tw from "tailwind-react-native-classnames";

interface ToggleColorSelectionProps {
    item: ColorData;
    setSelectedColors: React.Dispatch<SetStateAction<ColorData[]>>;
    selectedColors: ColorData[];
}
function ToggleColorSelction({ item, setSelectedColors, selectedColors }: ToggleColorSelectionProps) {
    const isSelected = useMemo<boolean>(() => {
        if (selectedColors.includes(item)) {
            return true;
        }
        return false;
    }, [selectedColors]);

    function handleSelectionToggle() {
        if (!isSelected) {
            return setSelectedColors(prev => [...prev, item]);
        }
        const indexOfColor = selectedColors.indexOf(item);
        if (indexOfColor >= 0) {
            const updatedSelectedColors = [...selectedColors];
            updatedSelectedColors.splice(indexOfColor, 1);
            setSelectedColors(updatedSelectedColors);
        }
    }
    return (
        <View style={tw`flex flex-row items-center p-2`}>
            <Text style={tw`mr-auto`}>{item.colorName}</Text>
            <Switch
                value={isSelected}
                onValueChange={handleSelectionToggle}
            />
        </View>
    );
}

export default ToggleColorSelction ;
