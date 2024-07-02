import { StyleSheet, View,TextInput } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, FontAwesome, Feather } from '@expo/vector-icons';
import COLORS from '../Consts/colors'

const Header = () => {
  return (
    <>
       <View style={{
        backgroundColor: COLORS.main,
        height: '20%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20,
      }}>
        <View style={{ marginTop: 50, flexDirection: 'row', display: 'flex', justifyContent: "space-between" }}>
          <MaterialCommunityIcons name="menu" size={30} color={COLORS.bg} />
          <FontAwesome name="user-circle" size={30} color={COLORS.bg} />
        </View>
       
      </View>
      <LinearGradient
        colors={["#6C63FF", "transparent"]}
        style={{
          left: 0,
          right: 0,
          height: 90,
          marginTop: -45,
        }}
      >
        <View style={{
          backgroundColor: '#FFF',
          paddingVertical: 8,
          paddingHorizontal: 20,
          marginHorizontal: 20,
          borderRadius: 15,
          marginTop: 25,
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <TextInput
            placeholder='Search'
            placeholderTextColor="#ble5d3"
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              width: 260,
            }}
          />
          <Feather name="search" size={24} color={COLORS.main} style={{
            marginLeft: 30,
          }} />

        </View>

      </LinearGradient>
    </>
  )
}

export default Header

const styles = StyleSheet.create({})