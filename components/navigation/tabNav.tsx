import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import About from "../../screens/about";
import Home from "../../screens/home";

const TabNav = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Home}/>
                <Tab.Screen name='About' component={About}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNav;
