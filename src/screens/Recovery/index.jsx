import {
    Alert,
    Box,
    Button,
    Center,
    FormControl,
    Heading,
    Input,
    Text,
    VStack,
} from "native-base";
import { useState } from "react";
import { api } from "../../servers/api";
export const Recovery = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(<></>);
    const handleSubmit = async () => {
        if (email != "") {
            try {
                const data = await api.get(`/user/recovery/${email}`);
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
                <Alert maxW="400" marginTop={2} colorScheme="cyan">
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
                afeArea
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
                        <VStack space={3} mt="5">
                            <VStack space={3} mt="5">
                                <Heading
                                    size="lg"
                                    fontWeight="600"
                                    color="coolGray.800"
                                    _dark={{
                                        color: "warmGray.50",
                                    }}
                                >
                                    Esqueceu sua senha?
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
                                    Por favor, informe o e-mail associado a sua
                                    conta que enviaremos um codigo de
                                    recuperação.
                                </Heading>
                            </VStack>
                            <FormControl>
                                <FormControl>
                                    <Input
                                        placeholder="E-mail"
                                        value={email}
                                        onChangeText={(newText) =>
                                            setEmail(newText)
                                        }
                                    ></Input>
                                </FormControl>
                                {status}
                                <Button
                                    bg="primary.700"
                                    _hover={{
                                        bg: "primary.600",
                                    }}
                                    mt="2"
                                    colorScheme="primary"
                                    onPress={() => handleSubmit()}
                                >
                                    Entrar
                                </Button>
                                <Button
                                    size="sm"
                                    colorScheme="cyan"
                                    onPress={() => navigation.navigate("Login")}
                                    variant="link"
                                >
                                    Cancelar
                                </Button>
                            </FormControl>
                        </VStack>
                    </Box>
                </Center>
            </Box>
        </>
    );
};
