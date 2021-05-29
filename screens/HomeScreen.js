import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import { LinearGradient } from 'expo-linear-gradient';



function HomeScreen() {

    const [currentDate, setCurrentDate] = useState('')


    useEffect(() =>{
        var date = new Date().getDate()
        var month = new Date().getMonth()
        var year = new Date().getFullYear()

        setCurrentDate(
            date + '/' + month + '/' + year
        )

    }, [])

  return (
    <LinearGradient style= {styles.gradient} colors = {['#C7CEF4', '#DCA3C2']}>
        <View style={styles.background}>
                 <View style={{alignItems: 'center'}}>
                 <View style={styles.space} />
                 <View style={styles.space} />
                 <View style={styles.space} />
                    <Image style={styles.profileImage} source ={require('../assets/avatar.png')}/>
                    <Text style={styles.profileName}> Name</Text>
                    <Text style={styles.italic}> She/Her</Text>
                    <Text style={styles.profileDate}>{currentDate} </Text>

                    <View style={styles.space} />
                        <View style={styles.space} />
                        <View style={styles.space} />
                        <Text style={styles.italic2}>"Your body hears everything your mind says." - Unknown</Text>
                        <View style={styles.space} />
                        <View style={styles.space} />
                        <TouchableOpacity>
                            <Icon name="bars" size={80} color="#ed7d8a" />
                        </TouchableOpacity>
                </View>
        </View>
    </LinearGradient>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
    background:{
        flex:1,
    },
    profileImage:{
        width: 175,
        height: 175,
        borderRadius: 100,
        alignItems: 'center',
    },
    profileName:{
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },

    italic: {
        fontStyle: 'italic',
    },
    
    italic2: {
        fontStyle: 'italic',
        fontSize: 18,
        textAlign: 'center',
    },

    profileDate:{
        marginTop: 10,
        fontSize: 18,
    },
    space: {
        width: 20,
        height: 20,
    },
    gradient:{
        height: '100%',
        width:'100%',
    }
});

