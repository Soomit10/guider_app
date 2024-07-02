import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../Consts/colors'
import TarokaPage from './TarokaPage'
import actors from '../Consts/actors.json'

export default function Actors({navigation}) {
    return (
        <View style={{ marginBottom: 70 }}>
            <Text style={{ color: COLORS.text, paddingLeft: 10, }}>Actors</Text>
            <FlatList
                numColumns={2}
                data={actors}
                //horizontal
                renderItem={({ item }) => <TarokaPage taroka={item} onPress ={()=>navigation.navigate('Details',{item})}></TarokaPage>}
                keyExtractor={item => `key-${item.id}`}
                style={{ marginBottom: 30, }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})