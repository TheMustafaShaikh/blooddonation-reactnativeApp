import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/home"
import Register from "./screens/register"
import User from "./screens/user"

const Stack = createStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={HomeScreen} />
            <Stack.Screen name="Registeration" component={Register} />
            <Stack.Screen name="user" component={User} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}