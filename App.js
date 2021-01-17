import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
// import MenuScreen from './screens/MenuScreen';
import CatalogueByExercise from './screens/CatalogueByExercise';
import TrainingPreviewScreen from './screens/TrainingPreviewScreen';
import TrainingScreen from './screens/TrainingScreen';
import TrainingResultScreen from './screens/TrainingResultScreen';
import Posenet from "./model/PositionRecognizer";


const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
   
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Menu" component={MenuScreen} /> */}
        <Stack.Screen name="Menu" component={CatalogueByExercise} />
        <Stack.Screen name="Preview" component={TrainingPreviewScreen} />
        <Stack.Screen name="Training" component={TrainingScreen} />
        <Stack.Screen name="Result" component={TrainingResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


export default function App() {
  return (
      <MainStackNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
