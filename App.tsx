import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Connection from './screens/Connection';
import Quiz from './screens/Quiz';
import Begin from './screens/Begin';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type RootStackParamList = {
  Quiz: undefined;
  Begin: undefined;
  Connection: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Connection"
            component={Connection}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Begin"
            component={Begin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

