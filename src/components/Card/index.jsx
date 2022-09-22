import { Box, Center, Image, Stack, Text } from "native-base";
import React from "react";

export const Card = () => {
    return (
        <>

            <Stack
                style={{
                    marginTop: "3%",
                    marginLeft: "5%",
                    marginRight: "3%",
                }}
                space={3}
                direction="row"
            >
                <Box
                    bg={"blueGray.50"}
                    rounded="2xl"
                    borderStyle={"solid"}
                    style={{
                        padding: "4%",
                    }}
                >
                    <Image
                        source={{
                            uri: "https://firebasestorage.googleapis.com/v0/b/store-api-9d254.appspot.com/o/Group%2027%20(1).png?alt=media&token=a0d1346a-bf08-4add-b29a-4a358d873b27",
                        }}
                        alt="Alternate Text"
                        size={"container"}
                        width={130}
                        height={150}
                    />
                    <Box
                        style={{
                            padding: "4%",
                            marginTop: "2%",
                        }}
                        fontSize={"xs"}
                        fontWeight={"bold"}
                    >
                        <Box
                                                style={{
                            padding: "4%",
                            marginTop: "2%",
                        }}
                        >
                        <Text
                                fontSize="xl"
                                fontWeight={"bold"}
                            >
                                Maçã 
                            </Text>
                        </Box>
                        <Box
                            style={{
                                paddingLeft:"5%"
                            }}
                        >
                            <Text
                            color={"blueGray.700"}
                            >Fruta orgânica</Text>
                        </Box>
                        <Box
                            style={{
                                padding: "5%",
                            }}
                        >
                            <Text
                                fontWeight={"bold"}
                                color={"primary.700"}
                                fontSize="xl"
                            >
                                R$2,00
                            </Text>
                        </Box>
                    </Box>
                </Box>

                <Box
                    bg={"blueGray.50"}
                    rounded="2xl"
                    borderStyle={"dashed"}
                    style={{
                        shadowColor: "#cecece",
                        padding: "4%",
                    }}
                >
                    <Image
                        source={{
                            uri: "https://firebasestorage.googleapis.com/v0/b/store-api-9d254.appspot.com/o/Group%2027%20(1).png?alt=media&token=a0d1346a-bf08-4add-b29a-4a358d873b27",
                        }}
                        alt="Alternate Text"
                        bg={"blueGray.50"}
                        size={"container"}
                        width={130}
                        height={150}
                    />
                    <Box
                        style={{
                            padding: "4%",
                            marginTop: "2%",
                        }}
                        fontSize={"xs"}
                        fontWeight={"bold"}
                    >
                        <Center>
                            <Text
                                fontSize="xl"
                                fontWeight={"bold"}
                            >
                                Maçã verde
                            </Text>
                        </Center>
                        <Box
                            style={{
                                paddingLeft:"5%"
                            }}
                        >
                            <Text
                            color={"blueGray.700"}
                            >Fruta orgânica</Text>
                        </Box>
                        <Box
                            style={{
                                padding: "5%",
                            }}
                        >
                            <Text
                                fontWeight={"bold"}
                                color={"primary.700"}
                                fontSize="xl"
                            >
                                R$2,00
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Stack>

            
        </>
    );
};
