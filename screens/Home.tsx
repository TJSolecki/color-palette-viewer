import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import ColorPalettePreview, { ColorData } from "../components/ColorPalettePreview.tsx";
import axios from "axios";

interface ColorPaletteData {
    id: number;
    paletteName: string;
    colors: ColorData[];
}
function Home({ navigation }) {
    const [ colorPalettes, setColorPalettes ] = useState<ColorPaletteData[]>([]); 
    const [ isRefreshing, setIsRefreshing ] = useState<boolean>(false);

    async function handleRefresh() {
        setIsRefreshing(true);
        await setTimeout(() => {
        axios.get('https://color-palette-api.kadikraman.vercel.app/palettes')
            .then(({ data }: { data: ColorPaletteData[] }) => {
                setColorPalettes(data);
                setIsRefreshing(false);
            });
        }, 1000);
    }

    useEffect(() => {
        axios.get('https://color-palette-api.kadikraman.vercel.app/palettes')
            .then(({ data }: { data: ColorPaletteData[] }) => {
                setColorPalettes(data);
                setIsRefreshing(false);
            })
    }, []);

    return (
        <FlatList
            data={colorPalettes}
            keyExtractor={item => item.paletteName}
            renderItem={({item}) => <ColorPalettePreview 
                colorData={item.colors}
                paletteName={item.paletteName}
                handlePress={() => {
                    navigation.navigate("ColorPalette", {
                        name: item.paletteName,
                        data: item.colors,
                    });
                }}
            />}
            refreshing={isRefreshing}
            onRefresh={() => handleRefresh()}
        />
    );
}

export default Home;
