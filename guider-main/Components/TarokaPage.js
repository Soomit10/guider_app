import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../Consts/colors';
import { MaterialCommunityIcons, FontAwesome5, AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function TarokaPage({ taroka ,onPress}) {
    const { name, duration, designation, category, price, image } = taroka;

    // const DetailsPage  = ()=>{
    //     navigation.navigate('Details');
    // }
    return (
        <ScrollView>
            
            <View style={styles.tarokaContainer}>
                <Image style={styles.tarokaImage} source={{ uri: image }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: COLORS.text }}>{name}</Text>
                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', height: 35, paddingLeft: 10, marginBottom: 3 }}>
                    <MaterialCommunityIcons name="toolbox" size={24} color="#ff5d8f" style={{ borderRadius: 50, elevation: 5, padding: 2, shadowColor: COLORS.main, backgroundColor: COLORS.bg }} />
                    <Text style={{ color: COLORS.text, fontSize: 15, fontWeight: '500', paddingLeft: 5, width: '90%' }}> {designation}</Text>
                </View>
                {/* <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row',  height: 35, paddingLeft: 10,  marginBottom: 3 }}>
                    <AntDesign name="tags" size={24} color="#00cecb" style={{borderRadius:50,elevation:5,padding:2, shadowColor:COLORS.main, backgroundColor:COLORS.bg}} />
                    <Text style={{ color: COLORS.text, fontSize: 15, fontWeight: '500', paddingLeft: 5,width:'90%' }}> {category} </Text>
                </View>
                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row',  height: 35, paddingLeft: 10,  marginBottom: 3 }}>
                    <MaterialIcons name="timer" size={24} color="#fe7f2d" style={{borderRadius:50,elevation:5,padding:2, shadowColor:COLORS.main, backgroundColor:COLORS.bg}}/>
                    <Text style={{ color: COLORS.text, fontSize: 15, fontWeight: '500', paddingLeft: 5,width:'90%' }}> {duration} min</Text>
                </View> */}

                <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems:'center' }}>
                    <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', }}>
                        <MaterialCommunityIcons name="currency-bdt" size={24} color={COLORS.main} />
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.main }}>{price}</Text>
                    </View>
                    <View style={{display:'flex', flexDirection:'row'}}>
                        <AntDesign name="star" size={16} color="#e1de15" />
                        <AntDesign name="star" size={16} color="#e1de15" />
                        <AntDesign name="star" size={16} color="#e1de15" />
                        <AntDesign name="star" size={16} color="#e1de15" />
                        <FontAwesome5 name="star-half-alt" size={16} color="#e1de15" />

                    </View>

                </View>
                <Pressable style={{borderTopWidth:1, borderColor:'#d7d7d7',marginTop:8, flexDirection:'row', alignItems:'center' ,
                justifyContent:'center',paddingTop:7,
            }}
            onPress={onPress}
            >
                    <Text style={{color:COLORS.main}}>Explore</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.main} />
                </Pressable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    tarokaContainer: {
        marginTop: 10,
        elevation: 3,
        shadowColor: COLORS.main,
        height: 300,
        width: 200,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 5,
        margin: 3,
    },
    tarokaImage: {
        height: 150,
        width: '100%',
        borderRadius: 10,
        marginBottom: 5,
        resizeMode: 'stretch',

    },
    btn: {
        width: 90,
        height: 35,
        elevation: 1,
        backgroundColor: COLORS.main,
        shadowColor: COLORS.shadow,
        borderRadius: 6,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 10,
        padding: 5,
    },
    btnText: {
        //height:50,
        fontSize: 18,
        color: COLORS.bg,
        fontWeight: '500'
    },
})