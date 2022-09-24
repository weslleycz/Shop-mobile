import { NativeBaseProvider } from "native-base";
import React from "react";
import { Routes } from "./Routes";
import { Box, Container, Text } from "native-base";
import { theme } from "./src/theme";
import { LogBox } from 'react-native';

export default function App() {
    console.ignoredYellowBox = ['Remote debugger'];
    LogBox.ignoreAllLogs();
    return (
        <NativeBaseProvider
         theme={theme}>
        <Box bg={"primary.700"}
        style={{
        }}
         safeAreaTop/>
            <Routes></Routes>
        </NativeBaseProvider>
    );
}
