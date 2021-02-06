import React,{useState} from 'react'
import {Text,View,StyleSheet,TextInput,TouchableOpacity,Picker, Alert} from "react-native"
import dbh from "./config"
import * as firebase from "firebase"

export default function Registeration({ navigation }){
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let [email, setEmail] = useState('')
    let [bloodGroup,setBloodGroup] = useState('');
    let [phone, setPhone] = useState('')

    const registerUser = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
            
                dbh.collection("user-details").add({
                    name: username,
                    email: email,
                    bloodGroup: bloodGroup,
                    phoneNumber: phone,
                })
                alert("Account successfully created!");
            }).catch((er)=>alert(er.message))
    }


    return(
    <View style={styles.container}>
        <Text style={styles.header}>Registration</Text>
        <TextInput style={styles.input} placeholder="Enter your name" onChangeText={(text)=>setUsername(text)}/>
        <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" onChangeText={(text)=>setEmail(text)} />
        <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry={true} onChangeText={(text)=>setPassword(text)}/>
        <TextInput style={styles.input} placeholder="Enter your phone number" keyboardType="number-pad" onChangeText={(text)=>setPhone(text)}/>
        <Picker
            selectedValue={bloodGroup}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => setBloodGroup(itemValue)}>
            <Picker.Item label="A-" value="A-" />
            <Picker.Item label="A+" value="A+" />
            <Picker.Item label="B+" value="B+" />
            <Picker.Item label="B-" value="B-" />
            <Picker.Item label="O+" value="O+" />
            <Picker.Item label="O-" value="O-" />
            </Picker>
        <TouchableOpacity style={styles.button}>
                <Text style={{textAlign:'center',color:'white'}} onPress={registerUser}>Register</Text>
            </TouchableOpacity>
                <Text style={{textAlign:'center',color:'#0091ea'}} onPress={()=>navigation.navigate('Login')}>Click here to Login</Text>
    </View>
    )
}

const styles = StyleSheet.create({ 
    input:{
        borderWidth:1,
        borderColor:'black',
        padding:6,
        width:200,
        marginTop: 2,
    },
    header:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:20,
    },
    button:{
        padding:8,
        width:200,
        textAlign:'center',
        backgroundColor:'#0091ea',
        color:'white',
        marginTop:10,
        borderRadius:8,

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }

})
