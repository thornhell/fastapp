import React from 'react';
import {Button, Text, View} from "react-native";
import About from "./about";


const Home = ({navigation}: {navigation:any}) => {

    return (
        <View>
             <Text>This is home screen</Text>
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
        </View>
    );
};

export default Home;
