import { Alert, StyleSheet } from 'react-native'
import React, { createContext, useState } from 'react'
 import axios from 'axios'
 import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

const UserContext = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    const register = (name, email, password) => {
        //  const userData = {email, password,name}
        // console.log(userData)
        //  console.log(userData)
          
        if (email && password && name) {
            setLoading(true);
            axios.post('http://192.168.0.183:8080/register', {
                email, password, name, rule: 'user',
            }).then(res => {
                let userInfo = res.data;
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setLoading(false);
                //console.log(userInfo);
                Alert.alert(userInfo?.message, 'Plz Login');
            }).catch(err => {
                console.log('register error', err);
                setLoading(false);
            })
        } else {
            Alert.alert('Invalid');
        }


    }

    const login = (email, password) => {

        if (email && password) {
            setLoading(true);
            axios.post('http://192.168.0.183:8080/login', {
                email, password
            }).then(res => {
                let userInfo = res.data;
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setLoading(false);
                //console.log(userInfo);
                Alert.alert(userInfo?.message);

            }).catch(err => {
                console.log('register error', err);
                setLoading(false);
            })
        } else {
            Alert.alert("Invalid");
        }

    }

    const logout = ()=>{
        setUserInfo('');
    }
   // console.log(userInfo);
    return (
        <AuthContext.Provider value={{ loading, userInfo, register, login,logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserContext

const styles = StyleSheet.create({})