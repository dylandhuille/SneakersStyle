import { StyleSheet, Text, View } from 'react-native';
import CardScreen from './src/screen/CardScreen';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <CardScreen />
        <StatusBar style="auto" />
      </ScrollView >
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});
