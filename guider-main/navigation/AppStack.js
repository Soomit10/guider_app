import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name='Home' options={{ title: 'Home', headerShown: false }} component={Tabs} />
        </Stack.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})