import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { AppNavigationParamList } from 'interfaces';
import THEME from 'theme';

type CreateScreenProps = {
  navigation: StackNavigationProp<AppNavigationParamList, 'CreateScreen'>;
};

const CreateScreen: React.FC<CreateScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>CreateScreen</Text>
      <View style={styles.button}>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('MainScreen')}
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

export default CreateScreen;
