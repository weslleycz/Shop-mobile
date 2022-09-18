import { MaterialIcons } from "@expo/vector-icons";
const {Alert: Alerta} = "react-native";
import { cpf } from "cpf-cnpj-validator";
import {
    Alert,
    Box,
    Button,
    Center,
    FormControl,
    Heading,
    HStack,
    Icon,
    Input,
    Link,
    Pressable,
    Text,
    VStack,
} from "native-base";
import { useState } from "react";
import { api } from "../../servers/api";
export const Signup = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [CPF, setCPF] = useState("");
    const [phone, setPhone] = useState("");
    const [show, setShow] = useState(false);
    const [status, setStatus] = useState(<></>);

    const handleSubmit = async () => {
        if (
            email !== "" &&
            password !== "" &&
            name !== "" &&
            CPF !== "" &&
            phone !== ""
        ) {
            const data = {
                email: email,
                password: password,
                name: name,
                CPF: CPF,
                phone: phone,
            };
            if (cpf.isValid(CPF)) {
                try {
                    const response = await api.post("/user/signup", data);
                    Alerta.alert(
                        "Sucesso",
                        "Registrado com sucesso",
                        [
                          { text: "OK", onPress: () => navigation.navigate("Login") }
                        ]
                      );
                } catch (error) {
                    const err = error.response.data.data.meta.target[0];
                    setStatus(
                        <Alert maxW="400" marginTop={2} colorScheme="cyan">
                            <Text
                                fontSize="sm"
                                fontWeight="medium"
                                color="coolGray.700"
                            >
                                {`${err} já cadastrado!`}
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
                            CPF informado inválido.!
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
            <Center
                bg="primary.50"
                style={{
                    height: "100%",
                }}
            >
                <Center w="100%">
                    <Box p="2" w="90%"
                     maxW="290" py="8">
                        <Heading
                            size="lg"
                            color="coolGray.800"
                            _dark={{
                                color: "warmGray.50",
                            }}
                            fontWeight="semibold"
                        >
                            Cadastro
                        </Heading>
                        <Heading
                            mt="1"
                            color="coolGray.600"
                            _dark={{
                                color: "warmGray.200",
                            }}
                            fontWeight="medium"
                            size="xs"
                        >
                            Inscreva-se para continuar!
                        </Heading>
                        <VStack space={3} mt="5">
                            <FormControl>
                                <FormControl.Label>Nome</FormControl.Label>
                                <Input
                                    value={name}
                                    onChangeText={(newText) => setName(newText)}
                                />
                            </FormControl>
                            <FormControl>
                                <FormControl.Label>Email</FormControl.Label>
                                <Input
                                    type="email"
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
                                    type={show ? "text" : "password"}
                                    InputRightElement={
                                        <Pressable
                                            onPress={() => setShow(!show)}
                                        >
                                            <Icon
                                                as={
                                                    <MaterialIcons
                                                        name={
                                                            show
                                                                ? "visibility"
                                                                : "visibility-off"
                                                        }
                                                    />
                                                }
                                                mr="2"
                                                color="muted.400"
                                            />
                                        </Pressable>
                                    }
                                />
                            </FormControl>
                            <FormControl>
                                <FormControl.Label>CPF</FormControl.Label>
                                <Input
                                    value={CPF}
                                    onChangeText={(newText) => setCPF(newText)}
                                />
                            </FormControl>
                            <FormControl>
                                <FormControl.Label>Telefone</FormControl.Label>
                                <Input
                                    value={phone}
                                    onChangeText={(newText) =>
                                        setPhone(newText)
                                    }
                                    type="number"
                                />
                            </FormControl>
                            {status}
                            <Button
                                mt="2"
                                bg="primary.700"
                                _hover={{
                                    bg: "primary.600",
                                }}
                                colorScheme="primary"
                                onPress={() => {
                                    handleSubmit();
                                }}
                            >
                                Cadastre-se
                            </Button>
                        </VStack>
                        <HStack mt="6" justifyContent="center">
                            <Text
                                fontSize="sm"
                                color="coolGray.600"
                                _dark={{
                                    color: "warmGray.200",
                                }}
                            >
                                Já tem uma conta?{" "}
                            </Text>
                            <Link
                                _text={{
                                    color: "cyan.500",
                                    fontWeight: "medium",
                                    fontSize: "sm",
                                }}
                                onPress={() => navigation.navigate("Login")}
                            >
                                Entrar
                            </Link>
                        </HStack>
                    </Box>
                </Center>
            </Center>
        </>
    );
};
