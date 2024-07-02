import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TarokaPage from './TarokaPage'
import COLORS from '../Consts/colors';
import education from '../Consts/educations.json'

export default function Education({navigation}) {
  return (
    <View style={{marginBottom:70}}>
        <Text style={{ color: COLORS.text, paddingLeft: 10, }}>Higher Education</Text>
        <FlatList
           numColumns={2}
          data={education}
          //horizontal
          renderItem={({ item }) => <TarokaPage taroka={item}onPress ={()=>navigation.navigate('Details',{item})}></TarokaPage>}
          keyExtractor={item => `key-${item.id}`}
          style={{ marginBottom: 30, }}
        />
      </View>
  )
}

const styles = StyleSheet.create({})