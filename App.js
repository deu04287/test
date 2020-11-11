import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.default}>
      <Text>Hello world! 1 2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: 'white'
  }
});

export default App;