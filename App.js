import React from 'react';
import { AuthProvider } from './src/AuthProvider';
import { Routes } from './src/Routes';
import { View, Text } from 'react-native';


const App = () => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    )
}

export default App;
