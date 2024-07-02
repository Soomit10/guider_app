import { Image, ScrollView, Alert, Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import COLORS from '../Consts/colors';
import { FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';

import Checkout from './Checkout';
import { StripeProvider } from "@stripe/stripe-react-native";
import { AuthContext } from '../context/UserContext';
import axios from 'axios';


export default function EventDetails({ route }) {

    const [error, setError] = useState("");
    const {userInfo } = useContext(AuthContext);
    const { category , date , name , Description , price , seats , image , startTime, endTime , fb_id ,linkedin_id, } = route.params?.item;
 
const bookAppointment = (phone)=>{
    axios.post('http://192.168.0.183:8080/addEventOrder', {
        category , date , name , Description , price , seats , image , startTime, endTime , fb_id ,linkedin_id, orderDate:Date(),phone, userInfo,
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
        <ScrollView>
            <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 20, elevation: 3, shadowColor: COLORS.main, padding: 5, backgroundColor: COLORS.bg }}>
                <View style={{}}>
                    <Image style={{ height: 200, width: "100%", borderRadius: 10 }} source={{ uri: image }} />
                    <View style={{ flexDirection: 'column', justifyContent: 'space-around', paddingTop: 5, paddingBottom: 5 }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{name}</Text>
                        <Text style={{ fontSize: 20, color: COLORS.main }}>Date: {date}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-around", marginBottom: 5 }}>
                        <Text style={{ color: COLORS.text }}>Start: {startTime}</Text>
                        <Text style={{ color: COLORS.text }}>End: {endTime}</Text>
                    </View>
                    <View style={{ borderStartWidth: 4, borderColor: COLORS.main, borderBottomStartRadius: 6, borderTopLeftRadius: 6, paddingLeft: 5, backgroundColor: '#EAEAFF', marginBottom: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: 20, color: COLORS.main }}>Description:</Text>
                        <Text style={{ fontSize: 20, padding: 5 }}>{Description}</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                            <FontAwesome name="video-camera" size={24} color="crimson" />
                            <Text style={{ fontSize: 20, marginLeft: 10, color: 'crimson' }}>Live</Text>
                        </View>

                        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginLeft: 20 }}>
                            <MaterialCommunityIcons name="currency-bdt" size={24} color={COLORS.main} />
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.main }}>{price}</Text>
                        </View>

                    </View>



                    <StripeProvider publishableKey="pk_test_51IgZMAF6Sm81KwUe4axuqoxyewricZKa0kccXlyI6LWtirtmNThRtuq0rDWJnve3JtSjsCiaCIivev3ho1ZoG9EB00e3XwI2qw">
                        <Checkout bookAppointment={bookAppointment}  />
                    </StripeProvider>
                </View>
            </View>
        </ScrollView>
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