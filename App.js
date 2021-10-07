import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardapioPage from './_src/componentes/CardapioPage';
import ComboPage from './_src/componentes/ComboPage';
import HomePage from './_src/componentes/HomePage';
import PedidoRealizadoPage from './_src/componentes/PedidoRealizadoPage';

export default function App() {
  return (
    <View>
      {/* <HomePage screenOptions={{headershown: false}} /> */}
      {/* <ComboPage screenOptions={{headershown: false}} /> */}
      {/* <PedidoRealizadoPage screenOptions={{headershown: false}} /> */}
      <CardapioPage screenOptions={{headershown: false}}  />

    </View>
  );
}


