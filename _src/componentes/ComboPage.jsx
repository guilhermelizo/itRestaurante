import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, TextInput } from 'react-native';
import { styles } from '../css/EstiloComboPage';


export default function ComboPage () {

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View>
                <ImageBackground style={styles.imgCombo}
                    source={require('../images/imgCombo.png')}
                >
                </ImageBackground>
            </View>

            <View style={styles.divBot}>
                <Text style={styles.txtCombo}>Nome do Combo</Text>
                <Text style={styles.txtDescricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</Text>
            
            
                <View>
                    <Text> Quantidade </Text>
                    <Text> +1 ou Menos</Text>
                    <Text> Observações </Text>
                </View>

                <View>
                    <Text> Total</Text>
                    <Text> R$ puxar valor</Text>

                    <TouchableOpacity style={styles.btnTouchable}>
                        <Text style={styles.btnText}> Fazer Pedido</Text>
                    </TouchableOpacity>
                </View>
            
            
            </View>
            
        </View>
      );

    
}