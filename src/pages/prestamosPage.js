import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function PrestamosPage({navigation, route}){
    const {user} = route.params;
    const [interes, setInteres] = useState(0);
    const [meses, setMeses] = useState(null);
    
    const [cantidadSolicitada, setCantidadSolicitada] = useState(0);
    const [plazos, setPlazos] = useState(
        [
            {label: '3 meses', value: 3},
            {label: '6 meses', value: 6}]
    );

    const [errorMessage, setErrorMessage] = useState('');
    let sueldoMensual = 0;

    const validar = () => {
if(cantidadSolicitada <= 0){
            setErrorMessage('Inserte una cantidad a solicitar válida')
        } else if(meses == null){
            setErrorMessage('Seleccione un plazo');
        } else{
            const totalAPagar = cantidadSolicitada * (1 + interes * .01);
            const pagoMensual = (totalAPagar / meses).toFixed(2);
            const pagoMensualConIva = (pagoMensual * 1.16).toFixed(2);
            navigation.push('ResumenPage', {user: user, cantidadSolicitada: cantidadSolicitada, interes: interes, totalAPagar:totalAPagar, meses: meses, pagoMensual: pagoMensual, pagoMensualConIva: pagoMensualConIva})
        }
    }

    return(
        <>
            <View style={styles.view}>
                <Text style={{marginTop: 5, textAlign: 'center', fontSize: 32, marginBottom: 20}}>Prestamos</Text>
                <TextInput 
                keyboardType='number-pad'
                style={styles.input} 
                placeholder="Sueldo Mensual"
                onChange={(e) => {
                    sueldoMensual = parseFloat(e.nativeEvent.text);
                    if(sueldoMensual <= 10000){
                        setInteres(2);
                        setPlazos([
                            {label: '3 meses', value: 3},
                            {label: '6 meses', value: 6}]);
                    }else if(sueldoMensual > 10000 && sueldoMensual <= 20000){
                        setInteres(4);
                        setPlazos([
                            {label: '3 meses', value: 3},
                            {label: '6 meses', value: 6},
                            {label: '9 meses', value: 9}]);
                    }else{
                        setInteres(6);
                        setPlazos([
                            {label: '3 meses', value: 3},
                            {label: '6 meses', value: 6},
                        {label: '9 meses', value: 9},
                    {label: '12 meses', value: 12},
                {label: '24 meses', value: 24}])
                    }
                }}/>
                <TextInput 
                                keyboardType='number-pad'
                style={styles.input} 
                placeholder='Cantidad a solicitar' onChange={(e) => {
                    setCantidadSolicitada(parseFloat(e.nativeEvent.text));
                }}></TextInput>
                <Text style={{textAlign: 'center', fontSize: 24, marginTop: 10, marginBottom:10}}>{interes}% de interés</Text>
                
                <View style={{marginHorizontal:50, marginBottom: 30}}>
                
                <Text style={{textAlign: 'center', fontSize: 24, marginTop: 10, marginBottom:10}}>Plazo</Text>
                <RNPickerSelect
                    onValueChange={(value) => {setMeses(value);}}
                      style={pickerSelectStyles}
                      placeholder={{
                        label: "seleccione plazos",
                        value: null,
                      }}
                      items={plazos}
                />
                </View>
                <Text style={{textAlign: 'center', fontSize: 24, color: 'red', marginBottom: 40}}>{errorMessage}</Text>
                <TouchableOpacity 
                 style={{
                    backgroundColor: '#BA50D4',
                    marginHorizontal: 50,
                    marginBottom:10, 
                    borderRadius:30,
                    height:60, marginBottom: 20}}
                onPress = {() => {validar();}}>
                <Text
                style={{
                    color:"#fff",
                    paddingTop: 10,
                    fontSize:24,
                    textAlign:'center' 
                    }}
                >Calcular</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    view:{
        marginTop: 50
    },
    input:{
        fontSize: 24,
        paddingLeft: 10,
        marginHorizontal: 50,
        marginTop: 10,
        height:50,
        borderRadius:50,
        borderWidth:3,
        borderColor:"#BA50D4",
        marginBottom: 15
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
      fontSize: 24,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 2,
      borderColor: "#BA50D4",
      borderRadius: 8,
      color: "#BA50D4",
      paddingRight: 30,
      backgroundColor: "#fff",
    },
    inputIOS: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: "grey",
      borderRadius: 8,
      color: "black",
      paddingRight: 30,
      backgroundColor: "#fff",
    },
  });