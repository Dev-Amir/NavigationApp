import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AuthContext from './AuthProvider';
import Center from './Center';
import { View, Text, Button } from "react-native";

function Login({ navigation, route }) {
    const { login } = useContext(AuthContext);

    return (
        <Center>
            <Text style={{fontSize: 25, fontWeight: "bold", marginBottom: 20}}>I am a {route.name} page</Text>
            <View style={{marginBottom: 25}}>
                <Button
                    title="log me in"
                    onPress={() => login()}
                />
            </View>
            <Button title="go to register" onPress={() => {
                navigation.navigate('Register');
            }} />
        </Center>
    )
}

function Register({ navigation, route }) {
    
    return (
        <Center>
            <Text style={{fontSize: 25, fontWeight: "bold", marginBottom: 20}}>I am a {route.name} page</Text>
            <Button title="go to login" onPress={() => {
                // navigation.navigate("Login");
                navigation.goBack();
            }} />
        </Center>
    )
}

const Stack = createStackNavigator();

const AuthStacks = () => {
    return (
        <Stack.Navigator screenOptions={{
            // header: () => null
        }} initialRouteName="Login">
            <Stack.Screen 
            options={{
                headerTitle: "Sign In"
            }}
            name="Login" component={Login} />

            <Stack.Screen options={{
                headerTitle: "Sign up"
            }} name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default AuthStacks;