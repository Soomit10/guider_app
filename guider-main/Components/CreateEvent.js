
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import axios from 'axios';



const CreateEvent = () => {
    const [selected, setSelected] = useState("");
    const [select, setSelect] = useState("");
    const [error, setError] = useState("");

    const [category, setCategory] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [name, setName] = useState('');
    const [Description, setDescription] = useState('');
    const [date, setDate] = useState('');
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
   

    const handleSelected = () => {
        const category = data.find(val => val.key === selected)
        setCategory(category.value);
    }
    

    const addGuider = () => {
        if (category && startTime && endTime && name && Description && price && seats && image && date && fb_id && linkedin_id) {

            axios.post('http://192.168.0.183:8080/addEvent', {
                category , date , name , Description , price , seats , image , startTime, endTime , fb_id ,linkedin_id,
            }).then(res => {
                let userInfo = res.data;
                setError(userInfo);
                Alert.alert(userInfo?.massage);
                 
            }).catch(err => {
                console.log('Add Event error', err);
            })
        } else {
            Alert.alert('Invalid');
        }
    }


    return (
        <View style={{marginBottom:100}}>
            <ScrollView>
                <View>
                    <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 10 }}>Create Event</Text>
                    <View style={styles.match}>
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>Event Name</Text>
                        <TextInput style={styles.input} onChangeText={text => setName(text)} />
                    </View>
                    <View style={styles.match}>
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>Description</Text>
                        <TextInput style={styles.textArea} onChangeText={text => setDescription(text)} />
                    </View>

                    <View style={styles.match}>
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>Date</Text>
                        <TextInput style={styles.input} onChangeText={text => setDate(text)} />
                    </View>

                    <View style={styles.match}>
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>Start Time</Text>
                        <TextInput style={styles.input} onChangeText={text => setStartTime(text)} />
                    </View>

                    <View style={styles.match}>
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>End Time</Text>
                        <TextInput style={styles.input} onChangeText={text => setEndTime(text)} />
                    </View>

                    <View style={styles.match}>
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>Facebook Link</Text>
                        <TextInput style={styles.input} onChangeText={text => setFb_id(text)} />
                    </View>

                    <View style={styles.match}>
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>LinkedIn Link</Text>
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
                        <Text style={{ fontSize: 16, marginLeft: 15 }}>Banner Image Link</Text>
                        <TextInput style={styles.input} onChangeText={text => setImage(text)} />
                    </View>

                    <View style={styles.matchS}>
                        <Text style={{ fontSize: 16, }}> Category</Text>
                        <SelectList setSelected={setSelected} placeholder="Select Category" data={data} onSelect={() => handleSelected()} />
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
    },
    textArea:{
        height: 100,
        marginLeft: 15,
        marginRight: 15,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
    }
})

export default CreateEvent

