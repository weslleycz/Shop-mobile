import {
    Box,
    Button,
    Center,
    FormControl,
    Heading,
    HStack,
    Input,
    Link,
    Text,
    VStack,
} from "native-base";

export const Login = () => {
    return (
        <>
            <Box
                style={{
                    height: "100%",
                }}
                safeArea
                bg="primary.50"
            >
                <Center
                    style={{
                        padding: 5,
                        margin: 5,
                        height: "100%",
                    }}
                >
                    <Box safeArea p="2" py="8" w="90%" maxW="290">
                        <Box
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                margin: 2,
                            }}
                        ></Box>
                        <Heading
                            size="lg"
                            fontWeight="600"
                            color="coolGray.800"
                            _dark={{
                                color: "warmGray.50",
                            }}
                        >
                            Bem-vindo
                        </Heading>
                        <Heading
                            mt="1"
                            _dark={{
                                color: "warmGray.200",
                            }}
                            color="coolGray.600"
                            fontWeight="medium"
                            size="xs"
                        >
                            Faça login para continuar!
                        </Heading>

                        <VStack space={3} mt="5">
                            <FormControl>
                                <FormControl.Label>Email</FormControl.Label>
                                <Input />
                            </FormControl>
                            <FormControl>
                                <FormControl.Label>Senha</FormControl.Label>
                                <Input type="password" />
                                <Link
                                    _text={{
                                        fontSize: "xs",
                                        fontWeight: "500",
                                        color: "indigo.500",
                                    }}
                                    alignSelf="flex-end"
                                    mt="1"
                                >
                                    Esqueceu a senha?
                                </Link>
                            </FormControl>
                            <Button
                                bg="primary.700"
                                _hover={{
                                    bg: "primary.600",
                                }}
                                mt="2"
                                colorScheme="primary"
                            >
                                Entrar
                            </Button>
                            <HStack mt="6" justifyContent="center">
                                <Text
                                    fontSize="sm"
                                    color="coolGray.600"
                                    _dark={{
                                        color: "warmGray.200",
                                    }}
                                >
                                    Não tem uma conta?{" "}
                                </Text>
                                <Link
                                    _text={{
                                        color: "indigo.500",
                                        fontWeight: "medium",
                                        fontSize: "sm",
                                    }}
                                    href="#"
                                >
                                    Cadastre-se
                                </Link>
                            </HStack>
                        </VStack>
                    </Box>
                </Center>
            </Box>
        </>
    );
};
