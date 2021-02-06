import React,{useState} from 'react'
import {Text,View,StyleSheet,TextInput,TouchableOpacity} from "react-native"
import dbh from "./config"
import * as firebase from "firebase"

export default function Home({navigation}) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const loginHandler = () =>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            navigation.navigate('user');
        })
    }

    return (
        <View style={styles.container}>
           
            <Text style={styles.header}>Blood Donation</Text>
            <TextInput style={styles.input} onChangeText={(text)=>setEmail(text)} placeholder="Enter your email"/>
            <TextInput style={styles.input} secureTextEntry={true} onChangeText={(text)=>setPassword(text)} placeholder="Enter your password"/>
            <TouchableOpacity style={styles.button}>
                <Text style={{textAlign:'center',color:'white'}} onPress={loginHandler}>Login</Text>
            </TouchableOpacity>
                <Text style={{textAlign:'center',color:'#0091ea'}} onPress={()=>navigation.navigate('Registeration')}>Click here to Register</Text>

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