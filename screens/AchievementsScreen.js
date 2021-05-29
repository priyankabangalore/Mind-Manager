import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function AchievementScreen() {
  return (
    <LinearGradient style= {styles.gradient} colors = {['#C7CEF4', '#DCA3C2']}>
      <View>
          <Text>Achievement</Text>
      </View>
    </LinearGradient>
  );
}

export default AchievementScreen;


const styles = StyleSheet.create({
  gradient:{
        height: '100%',
        width:'100%',
  }

});
