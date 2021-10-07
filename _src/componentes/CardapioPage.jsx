import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import { styles } from "../css/EstiloCardapioPage";

export default function CardapioPage(){
    return (
        <View style={styles.viewCardap}>
            <ImageBackground
                style={styles.imgLogoCardap}
               source={require('../images/imgCardapio.png')}
            >   
            </ImageBackground>

            <View style={styles.viewCard}>
                <Text style={styles.textTituloPrinc}>IT Burguer</Text>
                <Text>Hamburgueria 2.7km</Text>
            </View>
            
            <View>
                <Text>Combos</Text>
            </View>

            <View style={styles.card1}>
                <Image 
                    style={styles.imgCard1}
                    source={require('../images/imgLanche1.png')}
                />
                <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit accusantium unde voluptate deleniti suscipit eaque? Consequuntur ipsa aspernatur magni tenetur accusantium? Non eum dignissimos, facere hic maxime veritatis nulla laborum?</Text>
            </View>
        </View>
    )
}