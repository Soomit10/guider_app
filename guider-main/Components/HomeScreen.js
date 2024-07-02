import { View, Text, StyleSheet, TextInput, ScrollView, FlatList } from 'react-native'
import React from 'react'
import COLORS from '../Consts/colors'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, FontAwesome, Feather } from '@expo/vector-icons';
import fakeData from '../Consts/fakeData.json'
import TarokaPage from './TarokaPage';
import education from '../Consts/educations.json'
import actors from '../Consts/actors.json'
import motivation from '../Consts/motivation.json'
import islam from '../Consts/Islamic.json'
import Header from './Header';


export default function HomeScreen({navigation}) {
  return (
    // <View style={styles.main}>
    <View style={{ flex: 1 }}>
       <Header />
      <ScrollView style={{ marginBottom: 70 }}>
        <View>
          <Text style={{ color: COLORS.text, paddingLeft: 10, }}>Higher Education</Text>
          <FlatList
            // numColumns={2}
            data={education}
            horizontal
            renderItem={({ item }) => <TarokaPage taroka={item} onPress ={()=>navigation.navigate('Details',{item})}></TarokaPage>}
            keyExtractor={item => `key-${item.id}`}
            style={{ marginBottom: 30, }}
          />
        </View>
        <View>
          <Text style={{ color: COLORS.text, paddingLeft: 10, }}>Sport</Text>
          <FlatList
            // numColumns={2}
            data={fakeData}
            horizontal
            renderItem={({ item }) => <TarokaPage taroka={item}onPress ={()=>navigation.navigate('Details',{item})}></TarokaPage>}
            keyExtractor={item => `key-${item.id}`}
            style={{ marginBottom: 30, }}
          />
        </View>

        <View>
          <Text style={{ color: COLORS.text, paddingLeft: 10, }}>Islamic Scholar</Text>
          <FlatList
            // numColumns={2}
            data={islam}
            horizontal
            renderItem={({ item }) => <TarokaPage taroka={item} onPress ={()=>navigation.navigate('Details',{item})}></TarokaPage>}
            keyExtractor={item => `key-${item.id}`}
            style={{ marginBottom: 30, }}
          />
        </View>


        <View>
          <Text style={{ color: COLORS.text, paddingLeft: 10, }}>Motivational Speaker</Text>
          <FlatList
            // numColumns={2}
            data={motivation}
            horizontal
            renderItem={({ item }) => <TarokaPage taroka={item} onPress ={()=>navigation.navigate('Details',{item})} ></TarokaPage>}
            keyExtractor={item => `key-${item.id}`}
            style={{ marginBottom: 30, }}
          />
        </View>
        <View>
          <Text style={{ color: COLORS.text, paddingLeft: 10, }}>Actors</Text>
          <FlatList
            // numColumns={2}
            data={actors}
            horizontal
            renderItem={({ item }) => <TarokaPage taroka={item} onPress ={()=>navigation.navigate('Details',{item})}></TarokaPage>}
            keyExtractor={item => `key-${item.id}`}
            style={{ marginBottom: 30, }}
          />
        </View>
      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({

})