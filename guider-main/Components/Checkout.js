import { useStripe } from "@stripe/stripe-react-native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";


export default function Checkout({bookAppointment }) {
  
  const [amount, setAmount] = useState(100.5476);
  const [phone, setPhone] = useState('');
  const stripe = useStripe();
  const SERVER_URL_HEROKU = "http://192.168.0.183:8080";
 
  
  //console.log( bookAppointment);

  const buy = async () => {

  
    try {
      const finalAmount = parseInt(amount);
      const response = await fetch(`${SERVER_URL_HEROKU}/buy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone:phone,
          amount: finalAmount,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        return Alert.alert(data.message);
      }
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: data.clientSecret,
        merchantDisplayName: "Bitcoin Buy",
      });
      if (initSheet.error) {
        // console.error(initSheet.error);
        return Alert.alert(initSheet.error.message);
      }
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret: data.clientSecret,
      });
      if (presentSheet.error) {
        // console.error(presentSheet.error);
        return Alert.alert(presentSheet.error.message);
      }
      Alert.alert("Payment successfully! Thank you for the purchase.");
     
       bookAppointment(phone) ;
       
     
    } catch (err) {
      // console.error(err);
      Alert.alert("Payment failed!");
    }

  };

  return (
    <>
      {/* Wallet View */}
      <View style={styles.container}>
        {/* Buy button */}
        <TextInput placeholder="Phone Number" onChangeText={(text)=>setPhone(text)} style={{borderWidth:1, padding:8, borderRadius:6, paddingLeft:10}} />
        <TouchableOpacity
          key="Buy"
          onPress={buy}
          style={styles.button}
          
        >
          <Text style={styles.buttonLabel}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    marginBottom:50,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "#6C63FF",
    alignSelf: "center",
    marginHorizontal: "1%",
    marginBottom: 6,
    marginTop: 10,
    minWidth: "68%",
    minHeight:50,
    textAlign: "center",
    borderWidth: 0,
    justifyContent:'center',
  },
  buttonLabel: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  title: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
    color: "#333",
  },
  totalCoins: {
    fontSize: 28,
    color: "#333",
  },
  totalValue: {
    padding: 5,
    marginTop: 5,
  },
  value: {
    flexDirection: "row",
  },
  coin: {
    marginTop: 5,
    flex: 2,
    fontSize: 16,
  },
  coinBalance: {
    marginTop: 5,
    flex: 1,
    textAlign: "center",
    fontSize: 16,
  },
  amount: {
    marginTop: 5,
    flex: 4,
    textAlign: "right",
    marginRight: 15,
  },
  textInput: {
    marginLeft: 18,
    padding: 10,
    borderColor: "black",
    borderWidth: 0.5,
    flex: 1,
  },
  balance: {
    marginTop: 5,
    flex: 1,
    textAlign: "left",
    marginRight: 15,
  },
});