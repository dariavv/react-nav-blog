import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import THEME from 'theme';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: THEME.TEXT_COLOR,
    fontFamily: 'OpenSans-Bold',
  },
});

export default MainScreen;
