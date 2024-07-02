import { View, Text, StyleSheet, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import COLORS from '../Consts/colors.js';
import GoogleLogin from '../Consts/GoogleLogin.js';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../context/UserContext.js';
import Spinner from 'react-native-loading-spinner-overlay';


const Registration = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    secureTextEntry: true,
    check_textInputChange: false,
    check_name: false,
  })
console.log(data);
  const onChangeName = (val) => {
    if (val.length > 0) {
      setData({
        ...data,
        name: val,
        check_name: true,
      })
    } else {
      setData({
        ...data,
        name: val,
        check_name: false
      })
    }
  }
  const onChangeText = (val) => {
    if (val.length > 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      })
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false
      })
    }
  }
  const handlePassword = (val) => {
    setData({
      ...data,
      password: val,

    })
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }
  const { loading, register, userInfo } = useContext(AuthContext);
  return (
    <ScrollView style={styles.main}>
         <Spinner visible={loading} color="#6C63FF" />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
        />
      </View>
      <View>
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.txt}>Create your account</Text>
        <Text>{userInfo?.massage}</Text>
      </View>
      <View style={{display:'flex', justifyContent:'center'}}>
        <View style={styles.customInput}>
          <Feather style={styles.icon} name="user" size={24} color={COLORS.main} />
          <TextInput
            style={styles.input}
            onChangeText={(val) => onChangeName(val)}
            placeholder="Name"
            name="name"
            require
          />
          {data.check_name ?
            <Animatable.Text style={styles.icon2} animation="bounceIn"> <Feather name="check-circle" size={24} color="green" /></Animatable.Text>
            : null}
        </View>
        <View style={styles.customInput}>
          <Feather style={styles.icon} name="mail" size={24} color={COLORS.main} />
          <TextInput
            style={styles.input}
            onChangeText={(val) => onChangeText(val)}
            placeholder="Email"
            name="email"
            require
          />
          {data.check_textInputChange ?
            <Animatable.Text style={styles.icon2} animation="bounceIn"> <Feather name="check-circle" size={24} color="green" /></Animatable.Text>
            : null}
        </View>

        <View style={styles.customInput}>
          <AntDesign style={styles.icon} name="lock" size={24} color={COLORS.main} />
          <TextInput
            style={styles.input}
            onChangeText={(val) => handlePassword(val)}
            placeholder="Password"
            name='password'
            require
            autoCapitalize='none'
            secureTextEntry={data.secureTextEntry ? true : false}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? <Feather style={styles.icon3} name="eye-off" size={24} color={COLORS.text} /> : <Feather style={styles.icon3} name="eye" size={24} color={COLORS.text} />}

          </TouchableOpacity>

        </View>
      </View>
      <Pressable onPress={() => register(data.name, data.email, data.password)} style={styles.btn}>
        <Text style={styles.btnText}>SIGN UP</Text>
      </Pressable>
      <View style={styles.or}>
        <Ionicons name="md-code-slash-outline" size={22} color={COLORS.main} />
        <Text style={styles.orText}>Or sign up with</Text>
        <Ionicons name="md-code-slash-outline" size={22} color={COLORS.main} />
      </View>
      <View>

        <GoogleLogin />

      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 10,
    backgroundColor: COLORS.bg,
    height: '100%',
    // width: '100%',
    fontFamily: 'sans-serif',
    //paddingBottom:20,

  },
  logoContainer: {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    //backgroundColor:'red'
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'stretch'

  },
  welcome: {
    fontSize: 35,
    color: COLORS.text,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5

  },
  txt: {
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.text,
    marginBottom: 10,
  },
  customInput: {
    flexDirection: 'row',
    margin: 13,
    //marginRight:10,

  },
  icon: {
    elevation: 4,
    borderRadius: 500,
    width: 50,
    height: 50,
    backgroundColor: COLORS.bg,
    shadowColor: COLORS.shadow,
    textAlign: 'center',
    paddingTop: 12,
    marginLeft: 10,
    zIndex: 1,
    marginLeft: 1,

  },
  input: {
    elevation: 20,
    padding: 10,
    width: 340,
    paddingLeft: 30,
    shadowColor: COLORS.shadow,
    borderRadius: 40,
    fontSize: 20,
    backgroundColor: COLORS.bg,
    marginLeft: 30,
    position: 'absolute',


  },
  icon2: {
    textAlign: 'center',
    paddingTop: 12,
    marginLeft: 290,
    zIndex: 1,
    //marginLeft:1,
  },
  icon3: {
    paddingTop: 12,
    position: "absolute",
    marginLeft: 290,
  },
  btn: {
    // textAlign:'center',
    width: 150,
    marginTop: 5,
    height: 50,
    marginLeft: 140,
    elevation: 1,
    backgroundColor: COLORS.main,
    shadowColor: COLORS.shadow,
    borderRadius: 30,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',

  },
  btnText: {
    //height:50,
    fontSize: 20,
    color: COLORS.bg,
    fontWeight: '800'
  },
  or: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'

  },
  orText: {
    color: COLORS.text,
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10
  },
  // social: {
  //   flexDirection: 'row',
  //   display: 'flex',
  //   textAlign: 'center',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   borderRadius: 10,
  //   marginTop: 20,
  // },
  // socialIcon: {
  //   height: 50,
  //   width: 100,
  //   elevation: 4,
  //   shadowColor: COLORS.shadow,
  //   marginLeft: 15,
  //   alignItems: 'center',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   backgroundColor: COLORS.bg,
  //   borderRadius: 10,
  // }
})

export default Registration

