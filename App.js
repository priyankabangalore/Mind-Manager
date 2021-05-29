import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import CheckInScreen from './screens/CheckInScreen';
import OverviewScreen from './screens/OverviewScreen';
import AchievementScreen from './screens/AchievementsScreen';
import ResourcesScreen from './screens/ResourcesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Check-In" component={CheckInScreen}/>
        <Tab.Screen name="Overview" component={OverviewScreen}/>
        <Tab.Screen name="Achievement" component={AchievementScreen}/>
        <Tab.Screen name="Resources" component={ResourcesScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

