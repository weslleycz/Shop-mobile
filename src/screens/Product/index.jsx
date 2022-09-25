import { Box, Center, HStack, ScrollView, Text } from "native-base";
import { useState } from "react";
import { Image } from "react-native";
import NumericInput from "react-native-numeric-input";
import Icon from "react-native-vector-icons/AntDesign";
export const Product = ({ route, navigation }) => {
    const [quantity, setQuantity] = useState(1);
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
                            width: "80%",
                        }}
                    >
                        <HStack justifyContent={"space-between"}>
                            <Text fontWeight={"bold"} fontSize="3xl">
                                {route.params.produto.name}
                            </Text>
                            <NumericInput
                                type="up-down"
                                iconStyle={{ color: "#4ac793" }}
                                maxValue={route.params.produto.quantity}
                                valueType='real'
                                rounded 
                                minValue={1}
                                onChange={(value) => setQuantity(value)}
                            />
                        </HStack>
                    </Box>
                </Center>
                <Text fontWeight={"bold"} fontSize="2xl">
                    {(route.params.produto.price / 100).toLocaleString(
                        "pt-BR",
                        {
                            style: "currency",
                            currency: "BRL",
                        }
                    )}
                </Text>
            </ScrollView>
        </>
    );
};

//route.params.produto.id
