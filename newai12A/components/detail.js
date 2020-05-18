import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const SecondaryHeader = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{ props.title }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
  },
  title: {
    color: '#F3F3F3',
    fontSize: 20,
    fontWeight: '900',
  }
});

export default SecondaryHeader;