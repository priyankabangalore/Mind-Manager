import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function CheckInScreen({ navigation }) {

  const [water, setWater] = useState(' ');;
  const [exercise, setExercise] = useState(' ');
  const [tasks, setTasks] = useState(' ');
  const [sleep, setSleep] = useState(' ');
  const [notes, setNotes] = useState(' ');

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
    <ScrollView>
    <LinearGradient style= {styles.gradient} colors = {['#88ade0', '#DCA3C2']}>
      <View style = {styles.background}>
        <Text style={styles.headline}>Daily Check-In</Text>


        <View style={{alignItems:'center'}}>
        <Text style={styles.title}>How are you?</Text>
        <View style={styles.space} />
        </View>

        <View style={{ flexDirection:"row" , justifyContent: 'center', alignItems: 'center'}}>
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

        <View style={{alignItems:'center'}}>
          <View style={styles.space} />
          <Text style={styles.title}>Water intake:</Text>
          <View style={styles.space} />
          <Icon name="water" size={30} color="#e9e9e9" />
          <View style={styles.space} />

          <View style={{flexDirection:"row"}}>
          <TextInput 
            keyboardType="numeric"
            style={styles.input}
            placeholder='e.g. 2.5'
            onChangeText={(val)=> setWater(val)}/>
            <Text style={styles.units}>litres</Text>
            </View>
            <View style={styles.space} />

          <Text style={styles.title}>Amount of exercise:</Text>
          <View style={styles.space} />
          <Icon name="dumbbell" size={30} color="#e9e9e9" />
          <View style={styles.space} />

          <View style={{flexDirection:"row"}}>
          <TextInput 
            keyboardType="numeric"
            style={styles.input}
            placeholder='e.g. 3'
            onChangeText={(val)=> setExercise(val)}/>
            <Text style={styles.units}>hours</Text>
          </View>
          <View style={styles.space} />
          <Text style={styles.title}>Amount of sleep you got last night:</Text>
          <View style={styles.space} />
          <Icon name="moon" size={30} color="#e9e9e9" />
          <View style={styles.space} />

          <View style={{flexDirection:"row"}}>
          <TextInput 
            keyboardType="numeric"
            style={styles.input}
            placeholder='e.g. 7'
            onChangeText={(val)=> setSleep(val)}/>
            <Text style={styles.units}>hours</Text>
            </View>
            <View style={styles.space} />

          <Text style={styles.title}>What did you do today?</Text>
          <View style={styles.space} />
          <Icon name="calendar-day" size={30} color="#e9e9e9" />
          <View style={styles.space} />

          <TextInput 
            multiline
            style={styles.input2}
            placeholder='e.g. Walked'
            onChangeText={(val)=> setTasks(val)}/>
            <View style={styles.space} />

          <Text style={styles.title}>General notes:</Text>
          <View style={styles.space} />
          <Icon name="quote-right" size={25} color="#e9e9e9" />
          <View style={styles.space} />

          <TextInput 
            multiline
            style={styles.input2}
            placeholder='e.g. Self reflection'
            onChangeText={(val)=> setNotes(val)}/>
          </View>
          <View style={styles.space} />
          <View style={styles.space} />
          <View style={styles.space} />

          <Text style={styles.headline}>Today's Overview</Text>
          <View style={{alignItems:'center'}}>
          <Text style={styles.profileDate}>{currentDate} </Text>
          <View style={styles.space} />
          </View>

          <View style={{ flexDirection:"row"}}>
          <Text style={styles.overviewtitle}>
            Mood: <Text></Text>
          </Text>
          
          <Icon style={{marginTop: -10}} name="laugh-beam" size={40} color="#ffffff" />
         
          </View>
          <View style={styles.space} />
          <View style={{ flexDirection:"row"}}>
          <Text style={styles.overviewtitle}>
            Amount of water drank: <Text></Text>
          </Text>
          <Text style={styles.overview}>
             {water} litres
          </Text>
          </View>
          <View style={styles.space} />
          <View style={{ flexDirection:"row"}}>
          <Text style={styles.overviewtitle}>
            Hours of exercise: <Text></Text>
          </Text>
          <Text style={styles.overview}>
              {exercise} hours
          </Text>
          </View>
          <View style={styles.space} />
          <View style={{ flexDirection:"row"}}>
          <Text style={styles.overviewtitle}>
            Hours slept last night: <Text></Text>
          </Text>
          <Text style={styles.overview}>
              {sleep} hours
          </Text>
          </View>
          <View style={styles.space} />
          <View style={{ flexDirection:"row"}}>
          <Text style={styles.overviewtitle}>
            Today's activities: <Text></Text>
          </Text>
          <Text style={styles.overview}>
              {tasks}
          </Text>
          </View>
          <View style={styles.space} />
          <View style={{ flexDirection:"row"}}>
          <Text style={styles.overviewtitle}>
            General notes: <Text></Text>
          </Text>
          <Text style={styles.overview}>
              {notes}
          </Text>
          </View>
      </View>
    </LinearGradient>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  profileDate:{
    marginTop: 10,
    fontSize: 18,
    padding: 5,
    fontFamily: "Roboto",
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 30,
    fontFamily: "Roboto"
  },
  title: {
    textAlign: 'center',
    fontSize: 19,
    backgroundColor: "#abc5e9",
    borderRadius: 5,
    fontFamily: "Roboto"
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
    fontFamily: "Roboto"
  },
  input2:{
    borderWidth:1,
    borderColor: '#777',
    padding: 8,
    margin:10,
    width:200,
    height:150,
    fontFamily: "Roboto"
  },
  profileDate:{
    fontFamily: "Roboto",
    fontSize: 18,
},
  gradient:{
      height: '100%',
      width:'100%',
  },
  units:{
    margin: 20,
    fontFamily: "Roboto"
  },
  overview: {
    textAlign: 'center',
    fontSize: 19,
    fontFamily: "Roboto"
  },
  overviewtitle: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    fontFamily: "Roboto",
    paddingLeft: '15%',
  },
});
