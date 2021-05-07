import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function ResumenPage({navigation, route}){
    const {user, cantidadSolicitada, interes, totalAPagar, meses, pagoMensual, pagoMensualConIva} = route.params;
    return(
        <>
            <View style={styles.view}>
                <Text style={{marginTop: 50, textAlign: 'center', fontSize: 32}}>Resumen</Text>
                <Text style={styles.texto}>Correo: {user}</Text>
                <Text style={styles.texto}>Cantidad Solicitada: ${cantidadSolicitada}</Text>
                <Text style={styles.texto}>Interés: {interes}%</Text>
                <Text style={styles.texto}>Total A Pagar: ${totalAPagar}</Text>
                <Text style={styles.texto}>Meses: {meses}</Text>
                <Text style={styles.texto}>Pago Mensual: ${pagoMensual}</Text>
                <Text style={styles.texto}>P. Mensual c/IVA: ${pagoMensualConIva}</Text>
                <TouchableOpacity 
                 style={{
                    marginTop:60,
                    backgroundColor: '#BA50D4',
                    marginHorizontal: 50,
                    marginBottom:10, 
                    borderRadius:30,
                    height:60}}
                onPress = {() => {navigation.pop()}}>
                <Text
                style={{
                    color:"#fff",
                    paddingTop: 10,
                    fontSize:24,
                    textAlign:'center' 
                    }}
                >Volver</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    view:{
        marginLeft:50,
        marginRight:50,
        marginBottom: 30
    },
    texto:{
        marginTop: 10,
        marginLeft: 15,
        textAlign: 'left', 
        fontSize: 22,
    }
})