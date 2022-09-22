import { Box, Heading } from "native-base";
import { Card } from "../Card";

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
                <Card/>
            </Box>
        </>
    );
};
