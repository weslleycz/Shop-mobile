import moment from "moment";
import { Box } from "native-base";
import { useEffect, useState } from "react";
import { Categories } from "../../components/Categories";
import { Header } from "../../components/Header";
import { Products } from "../../components/Products";
import { deletData, getData } from "../../servers/storage";

export const Store = ({ navigation }) => {
    const [product, setProduct] = useState([]);
    useEffect(async () => {
        const expire = await getData("@expire");
        const token = await getData("@token");
        if (token === undefined) {
            navigation.navigate("Login");
        }
        if (moment(expire).isBefore(moment().format())) {
            deletData("@token");
            deletData("@expire");
            navigation.navigate("Login");
        }
    });

    return (
        <>
            <Box
                bg={"primary.50"}
                style={{
                    height: "100%",
                }}
            >
                <Header product={product} setProduct={setProduct} />
                <Box>
                    <Categories setProduct={setProduct} />
                </Box>
                <Products
                    product={product}
                    setProduct={setProduct}
                    navigation={navigation}
                />
            </Box>
        </>
    );
};
