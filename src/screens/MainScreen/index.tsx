import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import THEME from 'theme';

const MainScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
      <View style={styles.button}>
        <Button
          title="Go to About"
          onPress={() => {
            navigation.navigate('AboutScreen');
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Post"
          onPress={() => {
            navigation.navigate('PostScreen');
          }}
        />
      </View>
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
  button: {
    marginVertical: 10,
  },
});

export default MainScreen;
