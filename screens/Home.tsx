import React, { useEffect, useState } from "react";
import { FlatList, Button } from "react-native";
import ColorPalettePreview, { ColorData } from "../components/ColorPalettePreview.tsx";
import axios from "axios";

interface ColorPaletteData {
    id: number;
    paletteName: string;
    colors: ColorData[];
}
function Home({ navigation, route }) {
    const [ colorPalettes, setColorPalettes ] = useState<ColorPaletteData[]>([]); 
    const [ isRefreshing, setIsRefreshing ] = useState<boolean>(false);
    const newPalette = route.params?.newPalette;

    async function handleRefresh() {
        setIsRefreshing(true);
        setTimeout(() => {
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

    useEffect(() => {
        if (newPalette) {
            setColorPalettes(prev => [newPalette, ...prev]);
        }
    }, [newPalette])

    return (
        <FlatList
            data={colorPalettes}
            keyExtractor={item => item.paletteName + item.id}
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
            ListHeaderComponent={() => {
                return <Button
                    title="Add color palette"
                    onPress={() => { navigation.navigate('ColorPaletteModal') }}
                />
            }}
        />
    );
}

export default Home;
