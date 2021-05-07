import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, } from 'react-native';
import { validateEmail } from '../utils/validation';
import firebase from '../utils/firebase';

export default function RegisterPage({navigation}){
    let email = null, password = null;
    const [userError, setUserError] = useState('');
    const [passwordEmpty, setPasswordEmpty] = useState('');
    const [emailError, setEmailError] = useState('');

    const register = () => {
        setUserError('');
        setPasswordEmpty('');
        setEmailError('');
        if (!email || !password) {
            if (!email) setUserError('Ingrese un Correo Electrónico');
            if (!password) setPasswordEmpty('Ingrese una Contraseña');
        }
        else if (!validateEmail(email)) {
            setUserError('Ingrese un Correo Electrónico Válido');
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('cuenta creada');
                    navigation.replace('PrestamosPage', {user: email});
                }).catch((error) => {
                    setEmailError(error)
                });
        }
    }
    return(
        <>
            <View>
                    <Text style={{marginTop: 50, textAlign: 'center', fontSize: 32}}>Registrarse</Text>
                <View>
                    <Text style={{textAlign: 'center', fontSize: 18, marginTop: 15}}>Usuario</Text>
                    <TextInput 
                    keyboardType='email-address'
                    style={styles.input} 
                    onChange={(e)=>{
                            email = e.nativeEvent.text;
                            console.log(email);
                        }}/>
                    <Text style={{color: 'red', marginLeft: 60}}>{userError}</Text>
                    <Text style={{textAlign: 'center', fontSize: 18}}>Password</Text>
                    <TextInput 
                    secureTextEntry={true}
                    style={styles.input} 
                    onChange={(e)=>{
                        password = e.nativeEvent.text;
                    }}/>
                    <Text style={{color: 'red', marginLeft: 60, marginBottom: 50}}>{passwordEmpty}</Text>
                </View>
                <View>
                    <Text style={{textAlign: 'center', fontSize: 24, color: 'red', marginBottom: 40}}>{emailError}</Text>
                </View>
                <TouchableOpacity
                style={{
                    backgroundColor: '#BA50D4',
                    marginHorizontal: 50,
                    marginBottom:10, 
                    borderRadius:30,
                    height:60, marginBottom: 20}}
                    onPress = {() => {
                        register();
                        }}>
                    <Text style={{
                    color:"#fff",
                    paddingTop: 10,
                    fontSize:24,
                    textAlign:'center' 
                    }}>Registrarse</Text>
                </TouchableOpacity>
                <View>
                    <Text style={{color: '#444444',
        fontSize: 22,
        alignSelf: 'center'}}
                       >¿Ya tiene una cuenta? 
                        <Text
                            style={{color: '#BA50D4'}}
                            onPress={() => {navigation.goBack();}}> Iniciar Sesión</Text>
                    </Text>
                </View>
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
    principaltext:{
        fontSize:32,
        textAlign: 'center',
        marginTop: 100
    },
    secundariotext:{
        fontSize:14
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
});
        









