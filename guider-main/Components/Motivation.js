import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import motivation from '../Consts/motivation.json'
import COLORS from '../Consts/colors'
import TarokaPage from './TarokaPage'

export default function Motivation({navigation}) {
    return (
        <View style={{ marginBottom: 70 }}>
            <Text style={{ color: COLORS.text, paddingLeft: 10, }}>Motivational Speaker</Text>
            <FlatList
                numColumns={2}
                data={motivation}
                //horizontal
                renderItem={({ item }) => <TarokaPage taroka={item} onPress ={()=>navigation.navigate('Details',{item})}></TarokaPage>}
                keyExtractor={item => `key-${item.id}`}
                style={{ marginBottom: 30, }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})