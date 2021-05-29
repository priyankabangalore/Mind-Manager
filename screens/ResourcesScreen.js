import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import { LinearGradient } from 'expo-linear-gradient';

function ResourcesScreen() {
  return (
    <LinearGradient style= {styles.gradient} colors = {['#C7CEF4', '#DCA3C2']}>
      <View style = {styles.background}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.headline}>Resources</Text>

            <Text style={styles.title}>Wellness Together Canada</Text>
            <View style={styles.space} />
            <Text style={styles.lines}>1-866-585-0445 (Adults)</Text>
            <Text style={styles.lines}>1-888-668-6810 (Youth)</Text>
            <View style={styles.space} />

            <Text style={styles.title}>Kids Help Phone</Text>
            <View style={styles.space} />
            <Text style={styles.lines}>1-800-668-6868</Text>
            <View style={styles.space} />

            <Text style={styles.title}>Indigenous Hope for Wellness Help Line</Text>
            <View style={styles.space} />
            <Text style={styles.lines}>1-855-242-3310</Text>
            <View style={styles.space} />

            <Text style={styles.title}>Canada Suicide Prevention Service</Text>
            <View style={styles.space} />
            <Text style={styles.lines}>1-833-456-4566</Text>
            <View style={styles.space} />

            <Text style={styles.title}>Emergency</Text>
            <View style={styles.space} />
            <Text style={styles.lines}>911</Text>
            <View style={styles.space} />
            <Icon name="rainbow" size={90} color="#D1A69B" />
        </View>
      </View>
    </LinearGradient>
  );
}

export default ResourcesScreen;


const styles = StyleSheet.create({
  background: {
    flex: 1,
    //backgroundColor: "#C7CEF4",
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
    backgroundColor: "#D1A69B",
  },
  space: {
    width: 20,
    height: 20,
  },
  lines: {
    fontStyle: 'italic',
    fontSize: 16,
    textAlign: 'center',
  },
  gradient:{
    height: '100%',
    width:'100%',
  },
});
