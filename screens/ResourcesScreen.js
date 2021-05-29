import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ResourcesScreen() {
  return (
    <View>
        <Text style={styles.headline}>Resources</Text>
    </View>
  );
}

export default ResourcesScreen;


const styles = StyleSheet.create({
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 30,
  },

});
