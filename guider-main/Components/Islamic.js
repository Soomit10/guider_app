import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from '../Consts/colors'
import TarokaPage from './TarokaPage'
//import Islam from '../Consts/Islamic.json'

export default function Islamic({navigation}) {
    const [data, setData] = useState([]);
    const uri = "http://192.168.0.183:8080/getGuider";
    useEffect(() => {
      fetch(uri)
        .then(res => res.json())
        .then(data => setData(data))
    }, []);

    return (
        <View style={{ marginBottom: 70 }}>
            <Text style={{ color: COLORS.text, paddingLeft: 10, }}>Islamic Scholar</Text>
            <FlatList
                numColumns={2}
                data={data}
                //horizontal
                renderItem={({ item }) => <TarokaPage taroka={item} onPress ={()=>navigation.navigate('Details',{item})}></TarokaPage>}
                keyExtractor={item => `key-${item.id}`}
                style={{ marginBottom: 30, }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})