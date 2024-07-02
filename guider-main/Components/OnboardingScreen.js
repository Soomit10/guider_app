import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingScreen({ navigation }) {


    return (
        <Onboarding
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}

            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../assets/logo.png')} style={styles.onBoardImage} />,
                    title: 'Guider',
                    subtitle: 'Get Guidance from specialist ',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/profile.png')} style={styles.onBoardImage} />,
                    title: 'Create Profile',
                    subtitle: 'Create Your Professional Profile',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../assets/connect1.png')} style={styles.onBoardImage} />,
                    title: 'Connect Each Other',
                    subtitle: 'A new way to connect with the world',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/video.png')} style={styles.onBoardImage} />,
                    title: 'Video Call',
                    subtitle: 'Motivation, Guidances Through the Video call',
                },

            ]}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    onBoardImage: {
        margin:5,
        height: 320,
        width: 320,
       
    }
});
