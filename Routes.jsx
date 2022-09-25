import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Fragment } from "react";
import { Login } from "./src/screens/Login";
import { Recovery } from "./src/screens/Recovery";
import { Signup } from "./src/screens/Signup";
import { Store } from "./src/screens/Store";
import { Product } from "./src/screens/Product";

const Stack = createNativeStackNavigator();

export const Routes = () => {
    return (
        <>
            <Fragment>
                <NavigationContainer
                    style={{
                        backgroundColor: "red",
                    }}
                >
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}
                    >
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Loja" component={Store} />
                        <Stack.Screen name="Cadastro" component={Signup} />
                        <Stack.Screen name="Recuperar" component={Recovery} />
                        <Stack.Screen name="Produto" component={Product} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Fragment>
        </>
    );
};
