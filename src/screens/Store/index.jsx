import { Box, Button, Text } from "native-base";
import { deletData } from "../../servers/storage";

export const Store = () => {
    return (
        <>
            <Box safeArea>
                <Text>dddd</Text>
                <Button
                    onPress={() => {
                        deletData("@token");
                    }}
                >
                    dddd
                </Button>
            </Box>
        </>
    );
};
