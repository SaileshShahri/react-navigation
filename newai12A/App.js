import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/home';
import SecondaryHeader from './components/detail';



const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View>
        <Header title="Home" />
        <SecondaryHeader title="Home" />
      <Text>Home</Text>
    </View>
  );
}

function ChatScreen() {
  return (
    <View>
        <Header title="Chat" />
        <SecondaryHeader title="Chat" />
      <Text>Chat Screen</Text>
    </View>
  );
}


function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notification Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View>
       <Header title="Profile" />
        <SecondaryHeader title="Profile" />
       <Text>Profile Screen</Text>
    </View>
  );
}


function IconWithBadge({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

const Tab = createBottomTabNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'ios-chatboxes' : 'ios-chatboxes';
            } else if (route.name === 'Notification') {
              iconName = focused ? 'ios-notification' : 'ios-notification';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-contact' : 'ios-contact';

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#1da1f2',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

