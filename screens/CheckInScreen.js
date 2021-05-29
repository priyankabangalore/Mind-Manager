import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

export default function CheckInScreen( navigation) {

  const [water, setWater] = useState('10');;
  const [exercise, setExercise] = useState('50');


  return (
    <View style = {styles.background}>
      <Text style={styles.headline}>Daily Check-In</Text>
      <Text style={styles.title}>Mood</Text>
      <View style={styles.space} />
      <View style={{ flexDirection:"row" , justifyContent: 'center'}}>
          <TouchableOpacity>
              <Icon name="laugh-beam" size={60} color="#9fce68" />
          </TouchableOpacity>
          <View style={styles.space} />
          <TouchableOpacity>
              <Icon name="smile-beam" size={60} color="#b1ea6f" />
          </TouchableOpacity>
          <View style={styles.space} />
          <TouchableOpacity>
              <Icon name="meh" size={60} color="#e9e9e9" />
          </TouchableOpacity>
          <View style={styles.space} />
          <TouchableOpacity>
              <Icon name="frown" size={60} color="#ffa5c3" />
          </TouchableOpacity>
          <View style={styles.space} />
          <TouchableOpacity>
              <Icon name="angry" size={60} color="#ed7d8a" />
          </TouchableOpacity>
      </View>

        <View style={styles.space} />
        <Text style={styles.title}>Water intake</Text>
        <View style={styles.space} />

        <TextInput 
          keyboardType="numeric"
          style={styles.input}
          placeholder='e.g. 2.5'
          onChangeText={()=> setWater}/>

        <Text style={styles.title}>Amount of exercise</Text>
        <View style={styles.space} />

        <TextInput 
          keyboardType="numeric"
          style={styles.input}
          placeholder='e.g. 3'
          onChangeText={()=> setExercise()}/>

        <Text style={styles.title}>What did you do today?</Text>
        <View style={styles.space} />

        <TextInput 
          multiline
          style={styles.input2}
          placeholder='e.g. 3'
          onChangeText={()=> setExercise()}/>

        <Text style={styles.title}>Remainder of today's goals or plans:</Text>
        <View style={styles.space} />

        <TouchableOpacity onPress={() => navigation.navigate('OverviewScreen')}>
              <Icon name="sign-in-alt" size={60} color="#b1ea6f" />
          </TouchableOpacity>

    </View>
  );
}



// export default CheckInScreen;


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#C7CEF4",
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 19,
    backgroundColor: "#7894cf",
  },
  space: {
    width: 20,
    height: 20,
  },
  input:{
    borderWidth:1,
    borderColor: '#777',
    padding: 8,
    margin:10,
    width:200,
  },
  input2:{
    borderWidth:1,
    borderColor: '#777',
    padding: 8,
    margin:10,
    width:200,
    height:150,
  }
});
