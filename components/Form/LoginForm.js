import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Input from './Input';

const LoginForm = () => {
    const { register, control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        console.log(data)
    }

    return (
        <View style={styles.rootLayout}>
            <Input
                placeholder='Email Address'
                name='email'
                control={control}
            />
            <Input
                placeholder='Password'
                name={'password'}
                control={control}

            />
            <Text style={styles.forgetPass}>Forget Password</Text>
            <Button
                title='Submit'
                style={styles.loginButton}
                onPress={handleSubmit(onSubmit)}

            />

        </View>
    );
};
const styles = StyleSheet.create({
    rootLayout: {
        marginHorizontal: 30
    },
    textInput: {
        borderColor: "#A6A6A6",
        borderBottomWidth: 1,
        margin: 4,
        padding: 5,
    },
    forgetPass: {
        textAlign: "right",
        color: "#0386D0",
        marginVertical: 10
    },
    loginButton: {
        color: "red"
    }
})
export default LoginForm;


