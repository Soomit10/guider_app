import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/UserContext';
import { Feather } from '@expo/vector-icons';

const Appointment = () => {
  const [data, setData] = useState([]);
  const uri = "http://192.168.0.183:8080/getOrder";
  useEffect(() => {
    fetch(uri)
      .then(res => res.json())
      .then(data => setData(data))
  }, []);

  const { userInfo } = useContext(AuthContext);
  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 10 }}>Appointment List</Text>
      <FlatList
        data={data}
        renderItem={(element) => element?.item?.userInfo?.user?.email === userInfo.user.email &&
          <View style={{ marginTop: 10, padding: 10, elevation: 1, margin: 10, borderRadius: 6, flexDirection: 'row' }}>
            <Image
              style={{ height: 50, width: 50, borderRadius: 6, }}
              source={{
                uri: element.item.image
              }}
            />
            <View style={{ marginLeft: 10, paddingVertical: 10 }}>
              <Text>Event Name: {element?.item?.name}</Text>
              <Text>Event Date: {element?.item?.date}</Text>
            </View>
            <View style={{ marginLeft: 10, paddingVertical: 10 }}>
              <Text>Start Event: {element?.item?.startTime}</Text>
              <Text>End Event : {element?.item?.endTime}</Text>
            </View>

            <View style={{backgroundColor:'#6C63FF' , marginLeft:5, flexDirection:'row', justifyContent:'center', alignItems:'center', paddingLeft:10, paddingRight:10, borderRadius:10,}}>
               <TouchableOpacity>
               <Feather style={{elevation:5}} name="video" size={30} color="white" />
               </TouchableOpacity>
            </View>

          </View>
        }
        keyExtractor={item => item._id}
      />
    </View>
  )
}

export default Appointment

const styles = StyleSheet.create({})