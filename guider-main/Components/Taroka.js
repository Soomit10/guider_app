// import { Alert, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// //import { FlashList } from '@shopify/flash-list'
// import fakeData from '../Consts/fakeData.json'
// import TarokaPage from './TarokaPage';
// import COLORS from '../Consts/colors';
// import education from '../Consts/educations.json'
// import actors from '../Consts/actors.json'
// import motivation from '../Consts/motivation.json'
// import islam from '../Consts/Islamic.json'


// export default function Taroka() {
//   const [data, setData] = useState({});
//   const [isLoading, setIsLoading] = useState(true);


//   return (
//     <ScrollView style={{marginBottom:70}}>
//       <View>
//         <Text style={{ color: COLORS.text, paddingLeft: 10, }}>Higher Education</Text>
//         <FlatList
//           // numColumns={2}
//           data={education}
//           horizontal
//           renderItem={({ item }) => <TarokaPage taroka={item}></TarokaPage>}
//           keyExtractor={item => `key-${item.id}`}
//           style={{ marginBottom: 30, }}
//         />
//       </View>
//       <View>
//         <Text style={{ color: COLORS.text,  paddingLeft: 10, }}>Sport</Text>
//         <FlatList
//           // numColumns={2}
//           data={fakeData}
//           horizontal
//           renderItem={({ item }) => <TarokaPage taroka={item}></TarokaPage>}
//           keyExtractor={item => `key-${item.id}`}
//           style={{ marginBottom: 30, }}
//         />
//       </View>

//       <View>
//         <Text style={{ color: COLORS.text,  paddingLeft: 10, }}>Islamic Scholar</Text>
//         <FlatList
//           // numColumns={2}
//           data={islam}
//           horizontal
//           renderItem={({ item }) => <TarokaPage taroka={item}></TarokaPage>}
//           keyExtractor={item => `key-${item.id}`}
//           style={{ marginBottom: 30, }}
//         />
//       </View>


//       <View>
//         <Text style={{ color: COLORS.text,  paddingLeft: 10, }}>Motivational Speaker</Text>
//         <FlatList
//           // numColumns={2}
//           data={motivation}
//           horizontal
//           renderItem={({ item }) => <TarokaPage taroka={item}></TarokaPage>}
//           keyExtractor={item => `key-${item.id}`}
//           style={{ marginBottom: 30, }}
//         />
//       </View>
//       <View>
//         <Text style={{ color: COLORS.text, paddingLeft: 10, }}>Actors</Text>
//         <FlatList
//           // numColumns={2}
//           data={actors}
//           horizontal
//           renderItem={({ item }) => <TarokaPage taroka={item}></TarokaPage>}
//           keyExtractor={item => `key-${item.id}`}
//           style={{ marginBottom: 30, }}
//         />
//       </View>
//     </ScrollView>
//   )
// }

// const styles = StyleSheet.create({})