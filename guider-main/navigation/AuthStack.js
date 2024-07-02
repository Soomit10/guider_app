import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Components/Login';
import OnboardingScreen from '../Components/OnboardingScreen';
import Registration from '../Components/Registration';




const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator >

            <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={OnboardingScreen} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='Registration' options={{ title: 'Sign Up' }} component={Registration} />
            {/* <Stack.Screen name='Details' component={Details} />
            <Stack.Screen name='Home' options={{ title: 'Home', headerShown: false }} component={Tabs} />
 */}

        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})