import { Box } from "native-base";
import { Categories } from "../../components/Categories";
import { Header } from "../../components/Header";
import { Products } from "../../components/Products";

export const Store = () => {

    return (
        <>
            <Box
                bg={"primary.50"}
                style={{
                    height: "100%",
                }}
            >
                <Header  />
                <Box>
                    <Categories />
                </Box>
                <Products />
            </Box>
        </>
    );
};
