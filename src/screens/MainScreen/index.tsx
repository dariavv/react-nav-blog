import React from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import THEME from 'theme';
import DATA from 'data';
import Post from 'components/Post';

const MainScreen = ({ navigation }: any) => {
  const openItem = (post: any) => {
    navigation.navigate('PostScreen', {
      postId: post.id,
      postDescription: post.text,
      postDate: post.date,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(post: any) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} openItem={openItem} />}
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
    padding: 10,
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
