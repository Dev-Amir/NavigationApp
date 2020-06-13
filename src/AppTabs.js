import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Center from './Center';
// import { Text } from 'react-native';
// import AuthContext from './AuthProvider';
import { Ionicons,AntDesign, EvilIcons } from "@expo/vector-icons";
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';

const Tabs = createBottomTabNavigator();

const AppTabs = () => {

    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                    iconName = "home";
                    return <AntDesign name={iconName} size={size} color={color} />;
                } else if (route.name === 'Search') {
                    iconName = "search";
                    return <EvilIcons name={iconName} size={size} color={color} />;
                }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
                },  
            })}
        >
            <Tabs.Screen name="Home" component={HomeStack} />
            <Tabs.Screen name="Search" component={SearchStack} />
        </Tabs.Navigator>
    )
}

export default AppTabs;