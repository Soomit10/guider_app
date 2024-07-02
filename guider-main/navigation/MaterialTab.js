import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Education from '../Components/Education';
import Motivation from '../Components/Motivation';
import Sports from '../Components/Sports';
import Actors from '../Components/Actors';
import Islamic from '../Components/Islamic';


const Tab = createMaterialTopTabNavigator();


export default function MaterialTab() {
    return (
       
            <Tab.Navigator screenOptions={{
                tabBarLabelStyle: { fontSize: 10 },
                // tabBarStyle: { backgroundColor: 'powderblue' },
              }}>
                <Tab.Screen name="Education" component={Education} />
                <Tab.Screen name="Motivation" component={Motivation} />
                <Tab.Screen name="Islamic" component={Islamic} />

                <Tab.Screen name="Sport" component={Sports} />
                <Tab.Screen name="Actors" component={Actors} />
            </Tab.Navigator>
        
    )
}

const styles = StyleSheet.create({})