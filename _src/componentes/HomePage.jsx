import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { styles } from '../css/EstiloHomePage';


export default function HomePage () {

    

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.divTop}>
                <ImageBackground style={styles.imgHome}
                    source={require('../images/imgHome.png')}
                >
                </ImageBackground>
            </View>
            
            {/* Divisão da Página */}

            <View style={styles.divBot}>
                    <Text style={styles.textH1}>Com fome?</Text>
                    <Text style={styles.textH2}>Nós resolvemos isso</Text>
                    <Text style={styles.textH3}>Faça seu pedido agora mesmo na IT Burguer e aproveite os descontos e vantagens de nossa plataforma!</Text>

                    <TouchableOpacity  style={styles.btnTouchable}
                    onPress={() => pegaMenu()}>
                        <Text style={styles.btnText}>Ver Cardápio</Text>
                    </TouchableOpacity>
            </View>
        </View>
      );

    
}