import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad"/>
            <PrimaryButton >Reset</PrimaryButton>
            <PrimaryButton >Confirm</PrimaryButton>
        </View>
    )

}


const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: "#4e0329",
        borderRadius: 8,
        elevation: 4,

        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomWidth: 2,
        color: "#ddb52f",
        borderBottomColor: "#ddb52f",
        marginVertical: 8,
        textAlign: "center"
    }
});