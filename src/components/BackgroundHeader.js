import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const W = Dimensions.get('window').width
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native-web';

//Create Background gradient
  const BackgroundHeader = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
       style={styles.linearGradient}
       colors={['#5D0E7F','#7A007E','#9C007F']}
    >
    <View style={styles.line}/>
    </LinearGradient>
    
  );
};
export default BackgroundHeader;

const styles = StyleSheet.create({
  linearGradient: {
    height: (W * 3)/4,
  },
   line: {
     position: 'absolute',
     width:W,
     height:80,
     backgroundColor: 'orange',
     transform: [
       {
         rotate: '-35deg',
       }
     ],
     borderRadius: 60,

   },
});