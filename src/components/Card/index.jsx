import { Box, Center, Text } from "native-base";
import React from "react";
import { Image } from "react-native";

export const Card = ({ name, price, url, type }) => {
    return (
        <>
            <Box
                bg={"blueGray.50"}
                rounded="2xl"
                borderStyle={"solid"}
            >
                <Center>
                    <Box
                        style={{
                            marginTop: "8%",
                        }}
                    >
                        <Image
                            style={{ width: 130, height: 130 }}
                            source={{ uri: url }}
                            resizeMode="contain"
                        />
                    </Box>
                </Center>
                <Box
                    style={{
                        padding: "4%",
                    }}
                    fontWeight={"bold"}
                >
                    <Box
                        style={{
                            padding: "4%",
                        }}
                    >
                        <Center>
                            <Text fontWeight={"bold"} fontSize="xl">
                                {name}
                            </Text>
                        </Center>
                    </Box>
                    <Box>
                        <Center>
                            <Text color={"gray.400"} fontStyle={"italic"}>
                                {type}
                            </Text>
                        </Center>
                    </Box>
                    <Box
                        style={{
                            padding: "5%",
                        }}
                    >
                        <Center>
                            <Text
                                fontWeight={"bold"}
                                color={"primary.700"}
                                fontSize="xl"
                            >
                                {(price / 100).toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                            </Text>
                        </Center>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
