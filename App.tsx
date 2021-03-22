import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import Home from "./screens/home";
import About from "./screens/about";
import TabNav from "./components/navigation/tabNav";

function App(){


    return (
        <TabNav/>
    );
}

export default App;
