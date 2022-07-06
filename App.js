import { StyleSheet, View } from 'react-native';
import CardScreen from './src/screen/CardScreen';
import { StatusBar } from 'expo-status-bar';
import Searchbar_cust from './src/components/Searchbar_cust';
export default function App() {
  return (
    <View>
      <Searchbar_cust />
      <CardScreen />
      <StatusBar />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  card: {
    paddingTop: 50
  }
});
