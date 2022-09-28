import { Center, HStack, Text, View } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { getData } from "../../servers/storage";

export const Categories = ({ setProduct }) => {
    const [status, setStatus] = useState({
        fruit: "warmGray.50",
        vegetable: "warmGray.50",
        legume: "warmGray.50",
        cereal: "warmGray.50",
    });

    const setCategorie = async (option) => {
        switch (option) {
            case "fruit":
                status.fruit === "warmGray.50"
                    ? setStatus({
                          fruit: "primary.100",
                          vegetable: "warmGray.50",
                          legume: "warmGray.50",
                          cereal: "warmGray.50",
                      })
                    : setDefault();
                break;
            case "legume":
                status.legume === "warmGray.50"
                    ? setStatus({
                          fruit: "warmGray.50",
                          vegetable: "warmGray.50",
                          legume: "primary.100",
                          cereal: "warmGray.50",
                      })
                    : setDefault();
                break;
            case "vegetable":
                status.vegetable === "warmGray.50"
                    ? setStatus({
                          fruit: "warmGray.50",
                          vegetable: "primary.100",
                          legume: "warmGray.50",
                          cereal: "warmGray.50",
                      })
                    : setDefault();
                break;
            case "cereal":
                status.cereal === "warmGray.50"
                    ? setStatus({
                          fruit: "warmGray.50",
                          vegetable: "warmGray.50",
                          legume: "warmGray.50",
                          cereal: "primary.100",
                      })
                    : setDefault();
                break;
            default:
                setStatus({
                    fruit: "warmGray.50",
                    vegetable: "warmGray.50",
                    legume: "warmGray.50",
                    cereal: "warmGray.50",
                });
        }
    };

    const setDefault = async () => {
        const data = await getData("@products");
        setProduct(JSON.parse(data));
        setStatus({
            fruit: "warmGray.50",
            vegetable: "warmGray.50",
            legume: "warmGray.50",
            cereal: "warmGray.50",
        });
    };

    return (
        <>
            <View
                roundedTop={"3xl"}
                style={{
                    paddingLeft: "4%",
                    top: "-50%",
                }}
                bg={"primary.50"}
            >
                <HStack
                    style={{
                        marginTop: "2%",
                    }}
                    space={2}
                >
                    <TouchableOpacity onPress={() => setCategorie("fruit")}>
                        <Center
                            size="20"
                            bg={status.fruit}
                            _text={{
                                color: "warmGray.50",
                                fontWeight: "bold",
                            }}
                            rounded="full"
                        >
                            <Text
                                _text={{
                                    color: "warmGray.50",
                                    fontWeight: "bold",
                                }}
                                fontSize="4xl"
                            >
                                🍎
                            </Text>
                        </Center>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setCategorie("vegetable")}>
                        <Center size="20" bg={status.vegetable} rounded="full">
                            <Text fontSize="4xl">🥦</Text>
                        </Center>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setCategorie("legume")}>
                        <Center size="20" bg={status.legume} rounded="full">
                            <Text
                                _text={{
                                    color: "warmGray.50",
                                    fontWeight: "bold",
                                }}
                                fontSize="4xl"
                            >
                                🥔
                            </Text>
                        </Center>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setCategorie("cereal")}>
                        <Center size="20" bg={status.cereal} rounded="full">
                            <Text
                                _text={{
                                    color: "warmGray.50",
                                    fontWeight: "bold",
                                }}
                                fontSize="4xl"
                            >
                                🌽
                            </Text>
                        </Center>
                    </TouchableOpacity>
                </HStack>
            </View>
        </>
    );
};
