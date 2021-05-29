import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

function CheckInScreen() {
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

       <Text style={styles.title}>Amount of exercise</Text>
       <View style={styles.space} />

       <Text style={styles.title}>What did you do today?</Text>
       <View style={styles.space} />

       <Text style={styles.title}>Remainder of today's goals or plans:</Text>
       <View style={styles.space} />

    </View>
  );
}

export default CheckInScreen;


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
});
