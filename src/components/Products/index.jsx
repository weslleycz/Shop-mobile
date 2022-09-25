import { Box, Heading } from "native-base";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { api } from "../../servers/api";
import { Card } from "../Card";

export const Products = ({ navigation }) => {
    const [product, setProduct] = useState([]);
    const getProducts = async () => {
        await api
            .get("/product/list")
            .then((res) => {
                setProduct(res.data.data);
            })
            .catch((error) => {
                alert("error 400");
            });
    };

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
