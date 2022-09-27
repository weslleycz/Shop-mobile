import * as Network from "expo-network";
import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import NumericInput from "react-native-numeric-input";
import Icon from "react-native-vector-icons/AntDesign";
export const Product = ({ route, navigation }) => {
    const [quantity, setQuantity] = useState(1);
    const [online, setOnline] = useState(true);
    useEffect(async () => {
        (await (
            await Network.getNetworkStateAsync()
        ).isConnected)
            ? setOnline(true)
            : setOnline(false);
    }, []);
    return (
        <>
            <ScrollView
                bg={"primary.50"}
                style={{
                    height: "100%",
                }}
            >
                <Box bg={"blueGray.50"}>
                    <Box
                        style={{
                            paddingLeft: "6%",
                            marginTop: "5%",
                            marginBottom: "2%",
                        }}
                    >
                        <Icon
                            name="left"
                            onPress={() => navigation.navigate("Loja")}
                            size={25}
                            color="#303030"
                        />
                    </Box>
                </Box>
                <Center
                    bg={"blueGray.50"}
                    style={{
                        padding: "5%",
                    }}
                >
                    <Image
                        style={{ width: 350, height: 350 }}
                        source={{ uri: route.params.produto.url }}
                        resizeMode="contain"
                    />
                </Center>
                <Center>
                    <Box
                        style={{
                            width: "90%",
                        }}
                    >
                        <Text fontWeight={"bold"} fontSize="3xl">
                            {route.params.produto.name}
                        </Text>
                    </Box>
                </Center>

                <Box
                    style={{
                        width: "90%",
                        paddingLeft: "5%",
                    }}
                >
                    <Text
                        fontWeight={"bold"}
                        color={"blueGray.600"}
                        fontSize="sm"
                    >
                        {route.params.produto.description}
                    </Text>
                </Box>
                <Box
                    style={{
                        paddingLeft: "5%",
                    }}
                >
                    <Text
                        fontWeight={"bold"}
                        color={"primary.700"}
                        fontSize="3xl"
                    >
                        {`R$ ${
                            route.params.produto.price.toString().length <= 2
                                ? `0,${route.params.produto.price}`
                                : `${route.params.produto.price / 100},00`
                        }`}
                    </Text>
                </Box>
                {online ? (
                    <Center>
                        <Box
                            flex={1}
                            safeAreaTop
                            alignSelf="center"
                            style={{
                                width: "90%",
                            }}
                        >
                            <HStack
                                safeAreaBottom
                                justifyContent={"space-between"}
                            >
                                <Button size={"lg"}>
                                    Adicionar ao carrinho
                                </Button>
                                <NumericInput
                                    type="up-down"
                                    iconStyle={{ color: "#4ac793" }}
                                    maxValue={route.params.produto.quantity}
                                    valueType="real"
                                    rounded
                                    minValue={1}
                                    onChange={(value) => setQuantity(value)}
                                />
                            </HStack>
                        </Box>
                    </Center>
                ) : (
                    ""
                )}
            </ScrollView>
        </>
    );
};
