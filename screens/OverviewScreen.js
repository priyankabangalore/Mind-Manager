import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import { LinearGradient } from 'expo-linear-gradient';

function OverviewScreen() {
  return (
    <LinearGradient style= {styles.gradient} colors = {['#C7CEF4', '#DCA3C2']}>
        <View style={styles.background}>
            <View style={styles.backgroundLayer1} >
                <Text style={styles.title}>
                    Overview
                </Text>
            </View>

            <View style={styles.backgroundLayer2} >
                <View style={styles.categories}>
                    <Text style={styles.category}>
                        Mood:
                        <TouchableOpacity style={styles.iconFormat}>
                            <Icon name="laugh-beam" size={40} color="#9fce68" />
                        </TouchableOpacity>
                    </Text>
                    
                    <Text style={styles.category}>
                        Water:
                    </Text>
                    <Text style={styles.category} >
                        Exercise:
                    </Text>
                </View>
            </View>
        </View>
    </LinearGradient>
  );
}

export default OverviewScreen;


const styles = StyleSheet.create({
    background:{
        flex:1,
    },
    backgroundLayer1:{
        flex:1,
        //backgroundColor: "#C7CEF4",
        alignItems: 'center',
    },
    backgroundLayer2:{
        flex:8,
        //backgroundColor: "#DCA3C2"
        
    },
    title:{
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 15,
    },
    categories:{
        marginTop: 30,
        left:30,
    },
    category:{
        fontSize: 30,
        marginBottom: 10,
    },
    iconFormat:{
        paddingLeft: 100,
    },
    gradient:{
        height: '100%',
        width:'100%',
    }
});
