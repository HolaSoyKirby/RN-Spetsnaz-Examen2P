import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity,TextInput,Text} from 'react-native';
import {validateEmail} from "../utils/validation";
import firebase from '../utils/firebase';


export default function LoginPage({navigation}) {
    
    let email = null, password = null;
    const [userError, setUserError] = useState('');
    const [passwordEmpty, setPasswordEmpty] = useState('');
    const [emailError, setEmailError] = useState('');
    
    const login = () => {
        setUserError('');
        setPasswordEmpty('');
        setEmailError('');
        if(!email||!password){
            if(!email) setUserError('Ingrese su correo');
            if(!password)setPasswordEmpty('Ingrese su contraseña');
            console.log('Error');
        }else if(!validateEmail(email)){
            setEmailError('Ingrese un correo válido');
            console.log('Error');
        }else{
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(()=>{
                console.log("ok");
                navigation.push('PrestamosPage', {user: email});
            })
            .catch((error)=>{
                setEmailError(error);
            });
        }
    }

    return(
        <>
        <View styles={styles.view}>
            <Text style={{marginTop: 50, fontSize: 32, textAlign: 'center', marginBottom: 20}}>RN Examen 2P Spetsnaz</Text>
            <Text style={{fontSize: 28, textAlign: 'center', marginBottom: 10}}>Log In</Text>

        <TextInput
        keyboardType='email-address'
        placeholder="Email"
        style={styles.input}
        onChange={(e)=>{
            email = e.nativeEvent.text;
        }}
        />
        <Text style={{color: 'red', marginLeft: 60}}>{userError}</Text>
        <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        onChange={(e)=>{
            password = e.nativeEvent.text;
        }}
        />
        <Text style={{color: 'red', marginLeft: 60, marginBottom: 50}}>{passwordEmpty}</Text>
        <Text style={{textAlign: 'center', fontSize: 24, color: 'red'}}>{emailError}</Text>
        <TouchableOpacity style={{
            marginTop: 80,
        backgroundColor: '#BA50D4',
        marginHorizontal: 50,
        marginBottom:20, 
        borderRadius:30,
        height:60,
         
        }}
        onPress={()=>{
            login();
            }}>
        <Text style={styles.btnChido}>Log in</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{
        backgroundColor: '#BA50D4',
        marginHorizontal: 50,
        marginBottom:10, 
        borderRadius:30,
        height:60,
        
        }} 
        onPress={() => {
            navigation.push('RegisterPage');
        }}>
        <Text style={styles.btnChido}
        >Register</Text>
        </TouchableOpacity>
        </View>
    </>
    );
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        alignSelf:'center',
        marginLeft:50,
        marginRight:50
    },
    input:{
        fontSize: 24,
        paddingLeft: 20,
        marginHorizontal: 50,
        marginTop: 10,
        height:50,
        borderRadius:50,
        borderWidth:3,
        borderColor:"#BA50D4"
    },
    btnChido:{
        color:"#fff",
        paddingTop: 10,
        fontSize:24,
        textAlign:'center' 
    },
    errorInput:{
        borderColor: "#940c0c"
    }
})