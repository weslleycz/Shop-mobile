import * as Network from "expo-network";
import { Box, Heading } from "native-base";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { api } from "../../servers/api";
import { storeData,getData } from "../../servers/storage";
import { Card } from "../Card";

export const Products = ({ navigation }) => {
    const [product, setProduct] = useState([]);
    const getProducts = async () => {
        if (await (await Network.getNetworkStateAsync()).isConnected) {
            await api
                .get("/product/list")
                .then((res) => {
                    setProduct(res.data.data);
                     productsOff(res.data.data)
                })
                .catch((error) => {
                    alert("error 400");
                });
        } else {
           const data = await getData("@products");
           setProduct(JSON.parse(data))
        }
    };

    const productsOff = async (product) => {
        await storeData(
            "@products",
            JSON.stringify(product)
        );
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <Box
                style={{
                    paddingLeft: "6%",
                    top: "-3%",
                }}
            >
                <Heading color={"gray.400"} size="sm">
                    Ofertas da semana
                </Heading>
            </Box>
            <FlatGrid
                itemDimension={150}
                data={product}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Produto", { produto: item })
                        }
                    >
                        <Card
                            key={item.id}
                            price={item.price}
                            url={item.url}
                            name={item.name}
                            type={item.type}
                        />
                    </TouchableOpacity>
                )}
            />
        </>
    );
};
