import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';

export default function App() {
const stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? -64: 0}  
          style={{flex:1}}>
          
          <stack.Navigator>
            <stack.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={{
            headerShown: false,
            }}
            />
            <stack.Screen 
            name="MapScreen" 
            component={MapScreen}
            options={{
            headerShown: false,
            }}
            />
          </stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}



