import { StyleSheet, Text, View } from "react-native";
import LoginForm from "../components/Form/LoginForm";



const LoginScreen = () => {
    return (
        <View>
            <View style={styles.headerTextContainer}>
                <Text style={styles.loginText}>Login</Text>
                <Text style={styles.loginSubTitel}>By signing in you are agreeing {'\n'} our
                    <Text style={{ color: "#036BB9" }}> Term and privacy Policy</Text>
                </Text>
            </View>
            <LoginForm />
        </View>
    );
};


const styles = StyleSheet.create({
    headerTextContainer: {
        marginTop: 60,
        alignItems: "center",

    },
    loginText: {
        fontSize: 30,
        fontWeight: "800",
        fontStyle: "italic"
    },
    loginSubTitel: {
        textAlign: "center",
        lineHeight: 20,
        fontStyle: "italic",
        fontWeight: "500"
    },

});
export default LoginScreen;