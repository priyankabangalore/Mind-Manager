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
                    Overview of Today
                </Text>
            </View>

            <View style={styles.backgroundLayer2} >
                <View style={styles.categories}>
                    <Text style={styles.category}>
                        Overall mood:
                    </Text>
                    
                    <Text style={styles.category}>
                        Water intake:
                    </Text>

                    <Text style={styles.category} >
                        Amount of exercise:
                    </Text>

                    <Text style={styles.category} >
                        Tasks:
                    </Text>

                    <Text style={styles.category} >
                        Notes:
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
        alignItems: 'center',
    },
    backgroundLayer2:{
        flex:8,     
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 30,
    },
    categories:{
        marginTop: 30,
        left:30,
    },
    category:{
        fontSize: 19,
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
