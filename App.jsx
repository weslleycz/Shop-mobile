import { NativeBaseProvider } from "native-base";
import React from "react";
import { Routes } from "./Routes";
import { theme } from "./src/theme";

export default function App() {
    return (
        <NativeBaseProvider theme={theme}>
            <Routes></Routes>
        </NativeBaseProvider>
    );
}
