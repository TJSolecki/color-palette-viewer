import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, NavigationContext } from "@react-navigation/native";
import ColorPalette from "./screens/ColorPalette.tsx";
import ColorPaletteModal from "./screens/ColorPaletteModal.tsx";
import Home from "./screens/Home";
import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();


function MainStackScreen() {
    return (
            <MainStack.Navigator>
                <MainStack.Screen name="Home" component={Home}/>
                <MainStack.Screen 
                    name="ColorPalette"
                    component={ColorPalette}
                    options={({ route }) => ({ title: route.params.name })}
                />
            </MainStack.Navigator>
    );
};

function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{presentation: "modal"}}>
                <RootStack.Screen 
                    name="Main"
                    component={MainStackScreen}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen 
                    name="ColorPaletteModal"
                    component={ColorPaletteModal}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default App;
