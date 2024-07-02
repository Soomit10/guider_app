import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

import MaterialTab from '../navigation/MaterialTab';
import Header from './Header';

export default function Category() {
  return (
    <View style={{ flex: 1 }}>
      
       <Header />
       <MaterialTab />
    </View>
  )
}

const styles = StyleSheet.create({})