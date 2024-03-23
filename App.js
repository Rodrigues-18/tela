import {  StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/home';

export default function App() {
  return (
    <>
      <Home style={styles.prin}/>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  prin: {
      padding: 0,
      margin: 0,
  },
});
