import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity, SafeAreaView, } from 'react-native';


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
    <View style={styles.background}>
        <View style={styles.backgroundLayer1} >

        </View>
        <View style={styles.backgroundLayer2} >
            <View style={{alignItems: 'center', marginTop:-110}}>
                <Image style={styles.profileImage} source ={require('../assets/avatar.png')}/>
                <Text style={styles.profileName}> Name </Text>
                <Text style={styles.profileDate}>{currentDate} </Text>
            </View>
        </View>
    </View>
  );
}

export default HomeScreen;


const styles = StyleSheet.create({
    background:{
        flex:1,
    },
    backgroundLayer1:{
        flex:1,
        backgroundColor: "#C7CEF4"
    },
    backgroundLayer2:{
        flex:4,
        backgroundColor: "#DCA3C2"
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
    profileDate:{
        marginTop: 10,
        fontSize: 18,
    }

});

