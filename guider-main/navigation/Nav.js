import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import AppStack from './AppStack'
import AuthStack from './AuthStack'
import  { AuthContext } from '../context/UserContext'


const Nav = () => {
  const {userInfo } = useContext(AuthContext);
  console.log(userInfo)
  return (
    <NavigationContainer>
       <StatusBar/>
       {/* <AppStack/> */}
       {
        userInfo?.user?.email ? <AppStack/> :  <AuthStack />
       }
      
    </NavigationContainer>
  )
}

export default Nav

const styles = StyleSheet.create({})