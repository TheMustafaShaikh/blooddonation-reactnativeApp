import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,FlatList, PanResponder} from 'react-native';
import dbh from "./config";
import * as firebase from "firebase"





export default function User({navigation}) {
    const [data,setData] = useState([{}]);
    const [currentUserBlood,setCurrentUserBlood ] = useState(null);

    useEffect(()=>{
        dbh.collection("user-details").where("email","==",firebase.auth().currentUser?.email).onSnapshot((resp)=>{
            resp.docs.map((res)=>setCurrentUserBlood(res.data().bloodGroup))
        })

        dbh.collection("user-details").where("bloodGroup","==",currentUserBlood).onSnapshot((resp)=>{
            resp.docs.map((el)=>setData(data => [...data,el.data()]))
        })

        // console.log(firebase.auth().currentUser.email)
    },[])
  return (
    <View style={styles.container}>
        <FlatList data={data} renderItem={({item})=>
         <View style={styles.box}>
         <Text>name: {item.name}</Text>
         <Text>Phone number: {item.phoneNumber}</Text>
         <Text>blood group: {item.bloodGroup}</Text>
     </View>}/>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  box:{
      padding:10,
      borderWidth: 1,
    borderColor:'black',
    marginTop:10
  }
});
