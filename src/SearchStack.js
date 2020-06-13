import React, { useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Center from './Center';
import { Button, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import faker from 'faker';  
import { addProductRoutes } from './AddProductRoutes';

const Stack = createStackNavigator();

const Search = ({ navigation }) => {
    const [show, setShow] = useState(false);

    return (
        <Center>
            <View style={{marginBottom: 20, marginTop: 20}}>
                <Button title="Search Products" onPress={() => {
                    setShow(true);
                }} />
            </View>
            {
                show && (
                    <FlatList
                        style={{flex: 1, width: "100% "}}
                        renderItem={({ item }) => {
                            return (
                                <Button
                                    title={item}
                                    onPress={() => navigation.navigate('Product', {name: item})}
                                />
                            )
                        }}
                        keyExtractor={(product, index) => product + index}
                        data={Array.from(Array(50), () => faker.commerce.product())}
                    />
                )
            }
        </Center>
    )
}

const SearchStack = () => {

    return (
        <Stack.Navigator initialRouteName="Search">
            <Stack.Screen name="Search" component={Search} />
            {addProductRoutes(Stack)}
        </Stack.Navigator>
    )
}

export default SearchStack; 