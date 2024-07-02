import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
//import eventList from '../Consts/event.json';
import EventPage from './EventPage';
import COLORS from '../Consts/colors';
import Header from './Header';

export default function Event({navigation}) {

  const [data, setData] = useState([]);
  const uri = "http://192.168.0.183:8080/getEvent";
  useEffect(() => {
    fetch(uri)
      .then(res => res.json())
      .then(data => setData(data))
  }, []);
  return (
    
      <View style={{ flex: 1, }}>
        <Header />

        <View style={{marginBottom:250}}>
          <Text style={{ color: COLORS.text, paddingLeft: 10, }}>Recent Event</Text>
          <FlatList
            data={data}
            //horizontal
            renderItem={({ item }) => <EventPage events={item} onPress={()=>navigation.navigate('EventDetails',{item})}></EventPage>}
            keyExtractor={item => `key-${item.id}`}
            style={{ marginBottom: 30, }}
          />
        </View>
      </View>

   

  )
}

const styles = StyleSheet.create({})