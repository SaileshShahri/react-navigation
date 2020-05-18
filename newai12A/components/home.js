import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const Header = (props) => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.title}>{ props.title }</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
});

export default Header;