import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import AppStack from './src/components/stacks/AppStack';
// import AppStack from './src/components/stacks/AppStack';

export default function App() {
  return (
    <NativeBaseProvider>
     <AppStack />
     <StatusBar Style="light" />
    </NativeBaseProvider>
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