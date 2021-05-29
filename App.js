import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import CheckInScreen from './screens/CheckInScreen';
import OverviewScreen from './screens/OverviewScreen';
import AchievementScreen from './screens/AchievementsScreen';
import ResourcesScreen from './screens/ResourcesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={focused? 'home': 'home-outline'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Check-In') {
              return (
                <Ionicons
                  name={focused ? 'checkbox' : 'checkbox-outline'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Overview') {
              return (
                <Ionicons
                  name={focused ? 'ios-list' : 'ios-list-outline'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Achievement') {
              return (
                <Ionicons
                  name={focused ? 'star' : 'star-outline'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Resources') {
              return (
                <Ionicons
                  name={focused ? 'folder' : 'folder-outline'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ed7d8a',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Check-In" component={CheckInScreen}/>
        <Tab.Screen name="Overview" component={OverviewScreen}/>
        <Tab.Screen name="Achievement" component={AchievementScreen}/>
        <Tab.Screen name="Resources" component={ResourcesScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


