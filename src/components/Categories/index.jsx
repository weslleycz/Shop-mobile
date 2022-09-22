import { Center, HStack, Text, View } from "native-base";

export const Categories = () => {
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
                    <Center
                        size="20"
                        bg="#ddffd3"
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
                    <Center size="20" bg="#ddffd3" rounded="full">
                        <Text fontSize="4xl">🥦</Text>
                    </Center>
                    <Center size="20" bg="#ddffd3" rounded="full">
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
                    <Center size="20" bg="#ddffd3" rounded="full">
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
                </HStack>
            </View>
        </>
    );
};
