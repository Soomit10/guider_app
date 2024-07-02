import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../Consts/colors';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function EventPage({ events,onPress }) {

    const { name ,date , startTime , endTime, image } = events;

    return (
        <ScrollView>
            <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 20, elevation: 3, shadowColor: COLORS.main, padding: 5, backgroundColor: COLORS.bg }}>
                <View style={{}}>
                    <Image style={{ height: 200, width: "100%", borderRadius: 10 }} source={{ uri: image }} />
                    <View style={{ flexDirection: 'row', justifyContent:'space-around', paddingTop: 5, paddingBottom: 5 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
                        <Text style={{ fontSize: 15, color: COLORS.main }}>Date: {date}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-around", marginBottom: 5 }}>
                        <Text style={{ color: COLORS.text }}>Start: {startTime}</Text>
                        <Text style={{ color: COLORS.text }}>End: {endTime}</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                           <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                            <FontAwesome name="video-camera" size={24} color="crimson" />
                           <Text style={{fontSize:20, marginLeft:10, color:'crimson'}}>Live</Text>
                           </View>
                        <Pressable style={{
                            borderTopWidth: 1, borderColor: '#d7d7d7', flexDirection: 'row', alignItems: 'center',
                            justifyContent: 'center', height: 45, width:200, backgroundColor: '#D2D0FF', borderRadius: 20, marginBottom: 10
                        }}
                        onPress={onPress}
                        >
                            
                            <Text style={{ color: COLORS.main, fontSize: 18 }}>Explore</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.main} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})