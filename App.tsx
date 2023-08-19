import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, NavigationContext } from "@react-navigation/native";
import ColorPalette from "./screens/ColorPalette";
import Home from "./screens/Home";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen 
                    name="ColorPalette"
                    component={ColorPalette}
                    options={({ route }) => ({ title: route.params.name })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
