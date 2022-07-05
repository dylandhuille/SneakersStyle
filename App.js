import { StyleSheet, View } from 'react-native';
import CardScreen from './src/screen/CardScreen';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <CardScreen />
      <StatusBar style="auto" />
    </ScrollView >
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
});
