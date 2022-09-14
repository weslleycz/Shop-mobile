import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (kay, value) => {
    try {
        await AsyncStorage.setItem(kay, value);
    } catch (e) {
        console.log(e);
    }
};

export const getData = async (kay) => {
    try {
        const value = await AsyncStorage.getItem(kay);
        if (value !== null) {
            return value;
        }
    } catch (e) {
        alert("Ocorreu um erro inesperado!!");
    }
};

export const deletData = async (kay) => {
    try {
        await AsyncStorage.removeItem(kay);
    } catch (error) {
        console.log(e);
    }
};
