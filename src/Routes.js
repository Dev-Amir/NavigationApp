import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, AsyncStorage } from 'react-native';
import Center from './Center';
import AuthContext from './AuthProvider';
import AppTabs from './AppTabs';
import AuthStacks from './AuthStacks';

export const Routes = () => {
    const { user, login } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    // const [count, setCount] = useState(3)

    useEffect(() => {
        AsyncStorage.getItem('user')
            .then(() => {
                login();
            })
            .catch(error => {
                console.log("error: ", error);
            });

        setLoading(false);
    }, []);

    if(loading){
        return (
            <Center>
                {/* <Text style={{marginBottom: 30, fontSize: 50, fontWeight: "bold"}}>{count}</Text> */}

                <ActivityIndicator size="large" />
            </Center>
        )   
    }

    return (
        <NavigationContainer>
            {
                user ? (
                    <AppTabs />
                ) :  (
                    <AuthStacks />
                )
            }
        </NavigationContainer>
    )
}