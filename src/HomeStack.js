import React, { useContext } from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { Text, Button } from 'react-native';
import Center from './Center';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import AuthContext from './AuthProvider';
import faker from 'faker';
import {addProductRoutes} from './AddProductRoutes';
const Stack = createStackNavigator();

function Feed({ navigation }) {

    return (
        <Center>
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
        </Center>
    )
}

const HomeStack = () => {
    const { logout } = useContext(AuthContext);

    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
                headerRight: () => {                
                    return (
                        <TouchableOpacity style={{marginRight: 15}} onPress={() => {
                            logout();
                        }}>
                            <Text>Logout</Text>
                        </TouchableOpacity>
                    )
                }
            }}
            initialRouteName="Feed"
        >
            {addProductRoutes(Stack)}
            <Stack.Screen name="Feed" component={Feed} />
        </Stack.Navigator>
    )
}

export default HomeStack
