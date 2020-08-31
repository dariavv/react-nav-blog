import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import THEME from 'theme';

const AboutScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.decrtiption}>
        <Text style={styles.bold}>HelloWorld</Text> is a free photo blog app
        available on Apple iOS and Android. People can upload photos to our
        service and show them.
      </Text>
      <Text style={styles.decrtiption} />
      <Text style={styles.bold}>Version 1.0.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  decrtiption: {
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'OpenSans-Light',
    fontSize: 18,
    color: THEME.TEXT_COLOR,
  },
  bold: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
  },
});

export default AboutScreen;
