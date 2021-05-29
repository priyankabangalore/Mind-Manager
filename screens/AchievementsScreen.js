import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function AchievementScreen() {
  return (
    <LinearGradient style= {styles.gradient} colors = {['#C7CEF4', '#DCA3C2']}>
      <View>
      <Text style={styles.headline}>Achievements</Text>
      </View>
    </LinearGradient>
  );
}

export default AchievementScreen;


const styles = StyleSheet.create({
  gradient:{
        height: '100%',
        width:'100%',
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 30,
    fontFamily: "Roboto"
  },

});
