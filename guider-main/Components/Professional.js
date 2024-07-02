
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import axios from 'axios';



const Professional = () => {
    const [selected, setSelected] = useState("");
    const [select, setSelect] = useState("");
    const [error, setError] = useState("");

    const [category, setCategory] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [duration, setDuration] = useState('');
    const [price, setPrice] = useState('');
    const [seats, setSeats] = useState('');
    const [image, setImage] = useState('');
    const [fb_id, setFb_id] = useState('');
    const [linkedin_id, setLinkedin_id] = useState('');


    const data = [
        { key: '1', value: 'Education' },
        { key: '2', value: 'Actor' },
        { key: '3', value: 'Sports' },
        { key: '4', value: 'Islamic ' },
        { key: '5', value: 'Motivation' },

    ];
    const maps = [
        { key: '1', value: 'Morning [6 AM - 9 AM]' },
        { key: '2', value: 'Morning [8 AM - 10 AM]' },
        { key: '3', value: 'Morning [9 AM - 11 AM]' },
        { key: '4', value: 'Afternoon [2 PM - 6 PM' },
        { key: '5', value: 'Afternoon [1 PM - 5 PM' },
        { key: '6', value: 'Night [6 PM - 8 PM' },
        { key: '7', value: 'Night [8 PM - 10 PM' },
        { key: '8', value: 'Night [9 PM - 11 PM' },
        { key: '9', value: 'All Time' },
    ];

    const handleSelected = () => {
        const category = data.find(val => val.key === selected)
        setCategory(category.value);
    }
    const handleMap = () => {
        const category = maps.find(val => val.key === select)
        setTimeSlot(category.value);
    }

    const addGuider = () => {
        if (category && timeSlot && name && designation && price && seats && image && duration && fb_id && linkedin_id) {

            axios.post('http://192.168.0.183:8080/addGuider', {
                category , timeSlot , name , designation , price , seats , image , duration , fb_id ,linkedin_id,
            }).then(res => {
                let userInfo = res.data;
                setError(userInfo);
                Alert.alert(userInfo?.massage);
                 
            }).catch(err => {
                console.log('Add Match error', err);
            })
        } else {
            Alert.alert('Invalid');
        }
    }


    return (
        <View style={{marginBottom:100}}>
            <ScrollView>
                <View>
                    <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 10 }}>Create Professional Profile</Text>
                    <View style={styles.match}>
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>Full Name</Text>
                        <TextInput style={styles.input} onChangeText={text => setName(text)} />
                    </View>
                    <View style={styles.match}>
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>Designation</Text>
                        <TextInput style={styles.input} onChangeText={text => setDesignation(text)} />
                    </View>

                    <View style={styles.match}>
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>Time Duration(minutes)</Text>
                        <TextInput style={styles.input} onChangeText={text => setDuration(text)} />
                    </View>

                    <View style={styles.match}>
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>Facebook ID</Text>
                        <TextInput style={styles.input} onChangeText={text => setFb_id(text)} />
                    </View>

                    <View style={styles.match}>
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>LinkedIn ID</Text>
                        <TextInput style={styles.input} onChangeText={text => setLinkedin_id(text)} />
                    </View>


                    <View style={styles.match}>
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>Price</Text>
                        <TextInput style={styles.input} onChangeText={text => setPrice(text)} />
                    </View>

                    <View style={styles.match}>
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>Seats</Text>
                        <TextInput style={styles.input} onChangeText={text => setSeats(text)} />
                    </View>

                    <View style={styles.match}>
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>Image Link</Text>
                        <TextInput style={styles.input} onChangeText={text => setImage(text)} />
                    </View>

                    <View style={styles.matchS}>
                        <Text style={{ fontSize: 16, }}> Category</Text>
                        <SelectList setSelected={setSelected} placeholder="Select Category" data={data} onSelect={() => handleSelected()} />
                    </View>

                    <View style={styles.matchS}>
                        <Text style={{ fontSize: 16, }}>Time Slot</Text>
                        <SelectList setSelected={setSelect} placeholder="Select Time Slot" data={maps} onSelect={() => handleMap()} />
                    </View> 

                    <TouchableOpacity style={{
                        height: 50,
                        width: '90%', alignItems: 'center',backgroundColor:'#6C63FF',  marginTop: 20, borderRadius: 20, display: 'flex', justifyContent: 'center', marginLeft: 20, marginBottom: 20,
                    }} onPress={()=> addGuider()} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color:'#ffffff' }}>Submit</Text>
                    </TouchableOpacity> 
                </View>
            </ScrollView>
        </View>
        //<Text>bbb</Text>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        marginLeft: 15,
        marginRight: 15,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,

    },
    match: {
        marginTop: 10,

    },
    matchS: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10
    }
})

export default Professional

