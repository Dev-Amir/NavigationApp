import React, { useEffect, useRef, useState } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity, Button } from 'react-native';
import Center from './Center';

const Product = ({ route, navigation }) => {

    return (    
        <Center>
            <Text style={{marginBottom: 20}}>{route.params.name}</Text>

            <Button
                title="Edit This Product"
                onPress={() => navigation.navigate('EditProduct', {name: route.params.name})}
            />
        </Center>
    )
}

function apiCall(x) {
    return x;
}

const EditProduct = ({ route, navigation }) => {
    const [formState] = useState()
    const submit = useRef(() => {});

    submit.current = () => {
        apiCall(formState);
        navigation.goBack();
    }

    useEffect(() => {
        navigation.setParams({ submit });
    },[]);

    return (
        <Center>
            <Text>{route.params.name}</Text>
        </Center>
    )
}

export const addProductRoutes = (Stack) => {
    return (
        <>
            <Stack.Screen name="Product" component={Product}
                options={({ route }) => ({
                    headerTitle: `Product: ${route.params.name}`
                })}
            />
            <Stack.Screen name="EditProduct" component={EditProduct}
                options={({ route }) => ({
                    headerTitle: `Edit: ${route.params.name}`,
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 20}} onPress={() => {
                            route.params.submit && route.params.submit.current();
                        }}>
                            <Text style={{color: "red"}}>Done</Text>
                        </TouchableOpacity>
                    )
                })}
            />
        </>
    )
}