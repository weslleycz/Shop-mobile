import { Box, HStack, Input, Text, View } from "native-base";
import React, { useState } from "react";
import { Keyboard } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export const Header = () => {
    const [sizeHeader, setSizeHeader] = useState("25%");

    const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
        setSizeHeader("36%");
    });
    const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
        setSizeHeader("25%");
    });

    return (
        <>
            <View
                bg={"primary.700"}
                style={{
                    height: sizeHeader,
                }}
            >
                <Box
                    style={{
                        padding: "4%",
                    }}
                >
                    <HStack justifyContent={"space-between"}>
                        <Box>
                        <HStack space={2}>
                        <Text color={"white"} fontSize="sm">
                            Minha localização
                        </Text>
                        <Icon
                            name="chevron-small-down"
                            size={20}
                            color="#ffff"
                        />
                        </HStack>
                        </Box>
                        <Icon
                            style={{
                                padding:"1%"
                            }}
                            name="shopping-cart"
                            size={20}
                            color="#ffff"
                        />
                    </HStack>
                    <Box
                        style={{
                            padding: "5%",
                        }}
                    >
                        <Input
                            borderRadius={"xl"}
                            InputLeftElement={
                                <Icon
                                    name="magnifying-glass"
                                    size={25}
                                    style={{
                                        padding: "3%",
                                    }}
                                    color="#dddddd"
                                />
                            }
                            placeholder="Pesquisar produtos"
                            _focus={{
                                bg: "white",
                            }}
                            bg={"white"}
                        />
                    </Box>
                </Box>
            </View>
        </>
    );
};
