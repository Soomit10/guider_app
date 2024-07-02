import { Image, TouchableOpacity, ScrollView, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import COLORS from '../Consts/colors'
import { Feather, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from '../context/UserContext';


export default function Profile({navigation}) {
 
  const {userInfo , logout} = useContext(AuthContext)

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.profileContainer}>
      <View style={{
        backgroundColor: COLORS.main,
        height: '20%',
        // borderBottomLeftRadius: 20,
        // borderBottomRightRadius: 20,
        paddingHorizontal: 20,
      }}>
        {/* <Text style={{ color: COLORS.bg, fontSize: 30, }}>Profile</Text> */}
      </View>
      
      <View style={styles.footer}>
        <View style={styles.user}>
          <View style={{ alignItems: 'center', zIndex: 1, }}>
            <Image
              style={styles.userPhoto}
              source={require('../assets/userp.png')}
            />
            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>{userInfo?.user?.name}</Text>
            <Text style={{ fontSize: 15, color: COLORS.text }}>{userInfo?.user?.email}</Text>
          </View>
        </View>
        <ScrollView style={{ marginBottom: 50, }}>

          <Text style={{ fontSize: 20, marginTop: 20, }}>Account Setting</Text>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', }}>
              <Feather name="edit" size={24} color="#f08080" style={{ backgroundColor: '#f2e9e4', padding: 10, borderRadius: 100, }} />
              <Text style={{ fontSize: 18, color: COLORS.text, paddingLeft: 15, padding: 10, }}>Edit Profile</Text>
            </View>
            <View>
              <Feather name="chevron-right" size={30} color="black" />
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={()=> navigation.navigate('Appointment')} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', }}>
              <Ionicons name="md-bookmark" size={24} color="#ff6392" style={{ backgroundColor: '#ffe5ec', padding: 10, borderRadius: 100, }} />
              <Text style={{ fontSize: 18, color: COLORS.text, paddingLeft: 15, padding: 10, }}>Appointment</Text>
            </View>
            <View>
              <Feather name="chevron-right" size={30} color="black" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', }}>
              <Feather name="bell" size={24} color="#c9184a" style={{ backgroundColor: '#ffccd5', padding: 10, borderRadius: 100, }} />
              <Text style={{ fontSize: 18, color: COLORS.text, paddingLeft: 15, padding: 10, }}>Notifications</Text>
            </View>
            <View>
              <Feather name="chevron-right" size={30} color="black" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', }}>
              <Ionicons name="md-language" size={24} color="#2a9d8f" style={{ backgroundColor: '#caf0f8', padding: 10, borderRadius: 100, }} />
              <Text style={{ fontSize: 18, color: COLORS.text, paddingLeft: 15, padding: 10, }}>Language</Text>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <Text style={{ padding: 7, color: COLORS.text }}>English</Text>
              <Feather name="chevron-right" size={30} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', }}>
              <Feather name="moon" size={24} color="black" style={{ backgroundColor: '#e9ecef', padding: 10, borderRadius: 100, }} />
              <Text style={{ fontSize: 18, color: COLORS.text, paddingLeft: 15, padding: 10, }}>Dark Mode</Text>
            </View>
            <View>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </TouchableOpacity>
          {/* ....Taroka Profile */}
          <Text style={{ fontSize: 20, paddingTop: 15, }}>Are You a Guider?</Text>

          <TouchableOpacity onPress={()=> navigation.navigate('Professional')} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', }}>
              <FontAwesome5 name="user-tie" size={24} color="#f6aa1c" style={{ backgroundColor: '#efefd0', padding: 10, borderRadius: 100, }} />
              <Text style={{ fontSize: 18, color: COLORS.text, paddingLeft: 15, padding: 10, }}>Professional Profile</Text>
            </View>
            <View>
              <Feather name="chevron-right" size={30} color="black" />
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={()=> navigation.navigate('Create Event')} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', }}>
              <MaterialIcons name="event" size={24} color="#02c39a" style={{ backgroundColor: '#cce3de', padding: 10, borderRadius: 100, }} />
              <Text style={{ fontSize: 18, color: COLORS.text, paddingLeft: 15, padding: 10, }}>Create Event</Text>
            </View>
            <View>
              <Feather name="chevron-right" size={30} color="black" />
            </View>
          </TouchableOpacity>

          <Text style={{ fontSize: 20, paddingTop: 15, }}>Support</Text>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', }}>
              <Feather name="message-square" size={24} color="#c9184a" style={{ backgroundColor: '#ffccd5', padding: 10, borderRadius: 100, }} />
              <Text style={{ fontSize: 18, color: COLORS.text, paddingLeft: 15, padding: 10, }}>Message</Text>
            </View>
            <View>
              <Feather name="chevron-right" size={30} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>logout()} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', }}>
              <Feather name="log-out" size={24} color="#c9184a" style={{ backgroundColor: '#e9ecef', padding: 10, borderRadius: 100, }} />
              <Text style={{ fontSize: 18, color: COLORS.text, paddingLeft: 15, padding: 10, }}>LogOut</Text>
            </View>
          </TouchableOpacity>

        </ScrollView>
      </View>


    </View >
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    // backgroundColor: COLORS.main,
    // paddingTop:20,

  },
  footer: {
    flex: 1,
    backgroundColor: COLORS.bg,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 1,
    paddingBottom: 30,
   // paddingTop: 50,
   marginTop:-20,


  },
  user: {
   marginTop:-90
  },
  userPhoto: {
    height: 150,
    width: 150,
    borderRadius: 100,
    // marginLeft: 150,


  },

})