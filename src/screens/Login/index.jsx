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
    Alert,
} from "native-base";
import { api } from "../../servers/api";
import { storeData, getData } from "../../servers/storage";
import { useState,useEffect } from "react";

export const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState(<></>);

    useEffect(async() => {
        const token = await getData("@token")
        if (token!==undefined) {
            navigation.navigate("Loja");
        }
      });

    const handleSubmit = async () => {
        if (email !== "" && password !== "") {
            const data = {
                email: email,
                password: password,
            };
            try {
                const token = await api.post("/user/login", data);
                storeData("@token", token.data.token);
                navigation.navigate("Loja");
            } catch (error) {
                const response = error.response.data.data;
                setStatus(
                    <Alert
                        maxW="400"
                        marginTop={2}
                        status="error"
                        colorScheme="info"
                    >
                        <Text
                            fontSize="sm"
                            fontWeight="medium"
                            color="coolGray.700"
                        >
                            {response}
                        </Text>
                    </Alert>
                );
            }
        } else {
            setStatus(
                <Alert
                    maxW="400"
                    marginTop={2}
                    status="warning"
                    colorScheme="info"
                >
                    <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="coolGray.700"
                    >
                        Todos os campos são obrigatórios!
                    </Text>
                </Alert>
            );
        }
    };
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
                        height: "80%",
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
                                <Input
                                    value={email}
                                    onChangeText={(newText) =>
                                        setEmail(newText)
                                    }
                                />
                            </FormControl>
                            <FormControl>
                                <FormControl.Label>Senha</FormControl.Label>
                                <Input
                                    value={password}
                                    onChangeText={(newText) =>
                                        setPassword(newText)
                                    }
                                    type="password"
                                />
                                {status}
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
                                <Button
                                    onPress={() => {
                                        handleSubmit();
                                    }}
                                    bg="primary.700"
                                    _hover={{
                                        bg: "primary.600",
                                    }}
                                    mt="2"
                                    colorScheme="primary"
                                >
                                    Entrar
                                </Button>
                            </FormControl>
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
