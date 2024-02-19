import { TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function GameScreen() {
    return (
        <View>
            <TextInput />
            <PrimaryButton >Reset</PrimaryButton>
            <PrimaryButton >Confirm</PrimaryButton>
        </View>
    )

}