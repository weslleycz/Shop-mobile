import { Box, NativeBaseProvider } from "native-base";
import { theme } from "./src/theme";
import { Routes } from "./Routes";
import React from "react";

export default function App() {
  return (
    <NativeBaseProvider theme={theme} >
        <Routes></Routes>
    </NativeBaseProvider>
  );
}
