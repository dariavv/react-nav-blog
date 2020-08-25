import React from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import THEME from 'theme';
import DATA from 'data';
import Post from 'components/Post';

const MainScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(post: any) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} />}
      />
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
