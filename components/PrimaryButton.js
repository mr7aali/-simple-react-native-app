import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton({ children }) {
    const pressHandler = () => {
        console.log("Pressed!!")
    }
    return (
        <Pressable onPress={pressHandler}>
            <View style={styles.container}>
                <Text style={styles.btnText}>{children}</Text>
            </View>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#72063c",
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin:4,
        elevation: 2,
    },
    btnText: {
        color: "white",
        textAlign: "center",
    }
})