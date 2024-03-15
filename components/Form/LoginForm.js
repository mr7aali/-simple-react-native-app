import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const LoginForm = () => {
    return (
        <View style={styles.rootLayout}>
            <TextInput style={styles.textInput} placeholder='Email Address' />
            <TextInput style={styles.textInput} placeholder='Password' />
        </View>
    );
};
const styles = StyleSheet.create({
    rootLayout: {
        // borderColor: "red",
        // borderWidth: 1,
        marginHorizontal: 30
    },
    textInput: {
        borderColor: "#A6A6A6",
        borderBottomWidth: 1,
        margin: 4,
        padding: 5,

    }
})
export default LoginForm;