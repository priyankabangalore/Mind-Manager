import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import CheckInScreen from './screens/CheckInScreen';
import OverviewScreen from './screens/OverviewScreen';
import AchievementScreen from './screens/AchievementsScreen';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Check-In" component={CheckInScreen}/>
        <Tab.Screen name="Overview" component={OverviewScreen}/>
        <Tab.Screen name="Achievement" component={AchievementScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

