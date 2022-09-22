import { Box, Heading } from "native-base";

export const Products = () => {
    return (
        <>
            <Box
                style={{
                    paddingLeft: "4%",
                    top: "-3%",
                }}
            >
                <Heading color={"gray.400"} size="xs">
                    Ofertas da semana
                </Heading>
            </Box>
        </>
    );
};
