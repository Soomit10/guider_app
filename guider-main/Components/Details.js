import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import COLORS from '../Consts/colors';
// import { useRef } from "react";
// import RBSheet from "react-native-raw-bottom-sheet";
import { MaterialCommunityIcons, FontAwesome5, AntDesign, MaterialIcons } from '@expo/vector-icons';
import Checkout from './Checkout';
import { StripeProvider } from '@stripe/stripe-react-native';
import axios from 'axios';
import { AuthContext } from '../context/UserContext';

export default function Details({ route }) {
    const [error, setError] = useState("");
    // const refRBSheet = useRef();
    const { category , timeSlot , name , designation , price , seats , image , duration , fb_id ,linkedin_id, } = route.params?.item;
    const {userInfo } = useContext(AuthContext);
    const bookAppointment = (phone) => {
       
            axios.post('http://192.168.0.183:8080/addGuiderOrder', {
                category , timeSlot , name , designation , price , seats , image , duration , fb_id ,linkedin_id, orderDate: Date(), phone, userInfo,
            }).then(res => {
                let userInfo = res.data;
                setError(userInfo);
                //Alert.alert(userInfo?.massage);

            }).catch(err => {
                console.log('Add order error', err);
            })
            console.log("Done")
        
    }

    return (
        <View >
            <ScrollView style={{ backgroundColor: COLORS.bg, marginBottom: 80 }}>
                <View style={{ padding: 5, }}>
                    <Image style={{ width: '100%', height: 300, borderRadius: 6 }} resizeMode='stretch' source={{ uri: image }} />
                    <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: COLORS.text }}>{name}</Text>
                </View>
                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', height: 35, paddingLeft: 10, marginBottom: 5 }}>
                    <MaterialCommunityIcons name="toolbox" size={30} color="#ff5d8f" style={{ borderRadius: 50, padding: 2, shadowColor: COLORS.main, backgroundColor: COLORS.bg }} />
                    <Text style={{ color: COLORS.text, fontSize: 18, fontWeight: '500', paddingLeft: 5, width: '90%' }}> {designation}</Text>
                </View>
                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', height: 35, paddingLeft: 10, marginBottom: 5 }}>
                    <AntDesign name="tags" size={30} color="#00cecb" style={{ borderRadius: 50, padding: 2, shadowColor: COLORS.main, backgroundColor: COLORS.bg }} />
                    <Text style={{ color: COLORS.text, fontSize: 18, fontWeight: '500', paddingLeft: 5, width: '90%' }}>Category: {category} </Text>
                </View>
                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', height: 35, paddingLeft: 10, marginBottom: 15 }}>
                    <MaterialIcons name="timer" size={30} color="#fe7f2d" style={{ borderRadius: 50, padding: 2, shadowColor: COLORS.main, backgroundColor: COLORS.bg }} />
                    <Text style={{ color: COLORS.text, fontSize: 18, fontWeight: '500', paddingLeft: 5, width: '90%' }}>Duration: {duration} min</Text>
                </View>

                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', paddingLeft: 30, marginBottom: 5 }}>
                    <MaterialIcons name="check-circle" size={24} color={COLORS.main} style={{ borderRadius: 50, shadowColor: COLORS.main, backgroundColor: COLORS.bg }} />
                    <Text style={{ color: COLORS.text, fontSize: 15, fontWeight: '500', paddingLeft: 5, width: '90%' }}>No Video Record Without Permission</Text>
                </View>
                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', paddingLeft: 30, marginBottom: 5 }}>
                    <MaterialIcons name="check-circle" size={24} color={COLORS.main} style={{ borderRadius: 50, shadowColor: COLORS.main, backgroundColor: COLORS.bg }} />
                    <Text style={{ color: COLORS.text, fontSize: 15, fontWeight: '500', paddingLeft: 5, width: '90%' }}>No Photo Without Permission</Text>
                </View>
                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', paddingLeft: 30, marginBottom: 15 }}>
                    <MaterialIcons name="check-circle" size={24} color={COLORS.main} style={{ borderRadius: 50, shadowColor: COLORS.main, backgroundColor: COLORS.bg }} />
                    <Text style={{ color: COLORS.text, fontSize: 15, fontWeight: '500', paddingLeft: 5, width: '90%' }}>Always good Behavior</Text>
                </View>

                <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', }}>
                    <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginLeft: 20 }}>
                        <MaterialCommunityIcons name="currency-bdt" size={24} color={COLORS.main} />
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.main }}>{price}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20 }}>
                        <AntDesign name="star" size={16} color="#e1de15" />
                        <AntDesign name="star" size={16} color="#e1de15" />
                        <AntDesign name="star" size={16} color="#e1de15" />
                        <AntDesign name="star" size={16} color="#e1de15" />
                        <FontAwesome5 name="star-half-alt" size={16} color="#e1de15" />

                    </View>

                </View>
                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    {/* 
                    <TouchableOpacity style={{
                        height: 50,
                        width: '90%', alignItems: 'center', backgroundColor: '#6C63FF', marginTop: 20, borderRadius: 20, display: 'flex', justifyContent: 'center', marginLeft: 20, marginBottom: 20,
                    }} onPress={() => refRBSheet.current.open()} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>Book Appointment</Text>
                    </TouchableOpacity> */}
                </View>


                {/* <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={false}
                    customStyles={{
                        wrapper: {
                            backgroundColor: "transparent"
                        },
                        draggableIcon: {
                            backgroundColor: "#000"
                        }
                    }}
                >
                    <Text>BBB</Text>
                </RBSheet> */}

                <StripeProvider publishableKey="pk_test_51IgZMAF6Sm81KwUe4axuqoxyewricZKa0kccXlyI6LWtirtmNThRtuq0rDWJnve3JtSjsCiaCIivev3ho1ZoG9EB00e3XwI2qw">
                    <Checkout bookAppointment={bookAppointment} />
                </StripeProvider>

            </ScrollView >

        </View>
    )
}

const styles = StyleSheet.create({
    stretch: {
        height: 100,
        width: 300,
        alignItems: 'center',
        elevation: 10,
        borderColor: COLORS.main,
        borderRadius: 20,
        // borderWidth:2,
        shadowColor: COLORS.shadow,
        backgroundColor: 'lightgrey',
        margin: 5,
        padding: 5,


    }
})