import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import BackgroundHeader from './src/components/BackgroundHeader';
 
const App = () => {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
     <View style={styles.container}>
         <BackgroundHeader/>
         {/* <BottomTab /> */}
     </View> 
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function App() {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})