import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import TabNav from "../components/navigation/tabNav";

const LandingScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Header</Text>
            </View>
            <View style={styles.body}>
                <Text>Body</Text>
            </View>
            <View style={styles.footer}>
                <TabNav/>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flex: 1,
        backgroundColor: 'orange',
        width: '100%'
    },
    body: {
        flex: 9
    },
    footer: {
        flex: 1,
        backgroundColor: 'olive',
        width: '100%'
    }
});

export default LandingScreen;
