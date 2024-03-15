import { useController } from "react-hook-form";
import { StyleSheet, TextInput } from "react-native";

const Input = ({ name, control, placeholder }) => {
    const { field } = useController({
        control,
        defaultValue: "",
        name
    })
    return (
        <TextInput
            value={field.value}
            onChangeText={field.onChange}
            placeholder={placeholder}
            style={styles.textInput}
        />
    );
};
const styles = StyleSheet.create({
    textInput: {
        borderColor: "#A6A6A6",
        borderBottomWidth: 1,
        margin: 4,
        padding: 5,
    }
})
export default Input;