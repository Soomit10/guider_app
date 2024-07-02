import { View, StyleSheet, Pressable, Image, Text, Alert } from 'react-native'
import React from 'react'
import COLORS from './colors'

const googleLogin = () => {
    const handleGoogle = () => {
        Alert.alert("Hey Bro.. This Functionality coming soon..! Thank You");
    }


    return (
        <View style={{paddingBottom:30}}>
            <View style={styles.social}>
                <Pressable onPress={handleGoogle} style={styles.socialIcon}>
                    <Image
                        style={styles.sociolLogo}
                        source={require('../assets/google.png')}
                    />
                    <Text style={styles.socialText}>Google</Text>
                </Pressable>
                <Pressable onPress={handleGoogle} style={styles.socialIcon}>
                    <Image
                        style={styles.sociolLogo}
                        source={require('../assets/facebook.png')}
                    />
                    <Text style={styles.socialText}>Facebook</Text>
                </Pressable>

            </View>
            <View style={styles.social}>
                <Pressable onPress={handleGoogle} style={styles.socialIcon}>
                    <Image
                        style={styles.sociolLogo}
                        source={require('../assets/twitter.png')}
                    />
                    <Text style={styles.socialText}>Twitter</Text>
                </Pressable>
                <Pressable onPress={handleGoogle} style={styles.socialIcon}>
                    <Image
                        style={styles.sociolLogo}
                        source={require('../assets/github.png')}
                    />
                    <Text style={styles.socialText}>Github</Text>
                </Pressable>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    social: {
        flexDirection: 'row',
        display: 'flex',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
        
    },
    socialIcon: {
        flexDirection: 'row',
        height: 50,
        width: 150,
        elevation: 10,
        shadowColor: COLORS.shadow,
        marginLeft: 15,
        alignItems: 'center',
        backgroundColor: COLORS.bg,
        borderRadius: 10,
        paddingLeft: 10,

    },
    socialText: {
        paddingLeft: 10,
        fontSize: 20,
        color: COLORS.text,
    },
    sociolLogo: {
        width: 40,
        height: 40,

    }
})

export default googleLogin