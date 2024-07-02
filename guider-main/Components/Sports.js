import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../Consts/colors'
import fakeData from '../Consts/fakeData.json'
import TarokaPage from './TarokaPage'

export default function Sports({navigation}) {
    return (
        <View style={{ marginBottom: 70 }}>
            <Text style={{ color: COLORS.text, paddingLeft: 10, }}>Sports</Text>
            <FlatList
                numColumns={2}
                data={fakeData}
                //horizontal
                renderItem={({ item }) => <TarokaPage taroka={item} onPress ={()=>navigation.navigate('Details',{item})}></TarokaPage>}
                keyExtractor={item => `key-${item.id}`}
                style={{ marginBottom: 30, }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})