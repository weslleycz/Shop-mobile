import { NativeBaseProvider } from "native-base";
import React from "react";
import { Routes } from "./Routes";
import { Box, Container, Text } from "native-base";
import { theme } from "./src/theme";

export default function App() {
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
