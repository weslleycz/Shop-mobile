import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from "react";
import { Login } from "./src/screens/Login";

const Stack = createNativeStackNavigator();

export const Routes = () => {
    return (
        <>
            <NavigationContainer
            >
                <Stack.Navigator
                screenOptions={{
                    headerShown: false
                  }}
                >
                    <Stack.Screen name="Home" component={Login} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};
