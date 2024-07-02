import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Components/HomeScreen';
import Category from '../Components/Category';
import Event from '../Components/Event';
import Profile from '../Components/Profile';
import COLORS from '../Consts/colors';
import { AntDesign,MaterialIcons, Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from '../Components/Details';
import EventDetails from '../Components/EventDetails';
import Professional from '../Components/Professional';
import Appointment from '../Components/Appointment';
import CreateEvent from '../Components/CreateEvent';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const EventStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
      <HomeStack.Navigator >
        <HomeStack.Screen
          name="A"
          options={{ headerShown:false}}
          component={HomeScreen}
        />
        <HomeStack.Screen
          name="Details"
          component={Details}
          
        />
      </HomeStack.Navigator>
    );
  }
  function CategoryStackScreen() {
    return (
      <EventStack.Navigator >
        <EventStack.Screen
          name="B"
          options={{ headerShown:false}}
          component={Category}
        />
        <EventStack.Screen
          name="Details"
          component={Details}
          
        />
      </EventStack.Navigator>
    );
  }
  function EventStackScreen() {
    return (
      <EventStack.Navigator >
        <EventStack.Screen
          name="C"
          options={{ headerShown:false}}
          component={Event}
        />
        <EventStack.Screen
          name="EventDetails"
          component={EventDetails}
          
        />
      </EventStack.Navigator>
    );
  }

  function ProfileStackScreen() {
    return (
      <EventStack.Navigator >
        <EventStack.Screen
          name="D"
          options={{ headerShown:false}}
          component={Profile}
        />
        <EventStack.Screen
          name="Professional"
          component={Professional}
          
        />
        <EventStack.Screen
          name="Appointment"
          component={Appointment}
          
        />
        <EventStack.Screen
          name="Create Event"
          component={CreateEvent}
          
        />
      </EventStack.Navigator>
    );
  }

export default function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown:false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 10,
                    left: 5,
                    right: 5,
                    elevation: 0,
                    backgroundColor: COLORS.bg,
                    borderRadius: 15,
                    height: 70,
                    elevation: 5,
                    shadowColor: COLORS.shadow
                }
            }}
        >
            <Tab.Screen name="Home2" options={{
                title: "Home",
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabStyle}>
                        <Feather style={styles.icon} name="home" size={25} color={focused ? COLORS.main : COLORS.text} />
                        <Text style={{ color: focused ? COLORS.main : COLORS.text, fontSize: 12,  }}>Home</Text>
                    </View>
                ),
            }} component={HomeStackScreen}

            />
            <Tab.Screen name="Category" component={CategoryStackScreen}
                options={{

                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabStyle}>
                            <Feather style={styles.icon} name="list" size={25} color={focused ? COLORS.main : COLORS.text} />
                            <Text style={{ color: focused ? COLORS.main : COLORS.text, fontSize: 12, }}>Category</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Event" component={EventStackScreen}
                options={{

                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabStyle}>
                            <MaterialIcons style={styles.icon} name="event" size={25} color={focused ? COLORS.main : COLORS.text} />
                            <Text style={{ color: focused ? COLORS.main : COLORS.text, fontSize: 12,  }}>Event</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Profile" component={ProfileStackScreen}
                options={{

                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabStyle}>
                            <FontAwesome5 style={styles.icon} name="user-tie" size={25} color={focused ? COLORS.main : COLORS.text} />
                            <Text style={{ color: focused ? COLORS.main : COLORS.text, fontSize: 12,  }}>Profile</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    icon: {
        elevation: 5,
        borderRadius: 50,
        width: 40,
        height: 40,
        backgroundColor: COLORS.bg,
        shadowColor: COLORS.shadow,
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: 8,
        alignItems: 'center',
        marginBottom:2,
    },
    tabStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    tabText: {
        fontSize: 10,
    }
})