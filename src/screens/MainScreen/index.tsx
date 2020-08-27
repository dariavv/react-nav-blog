import React, { useCallback } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import THEME from 'theme';
import DATA from 'data';
import Post from 'components/Post';
import { IPost } from 'interfaces';

import { StackNavigationProp } from '@react-navigation/stack';

type AppNavigationParamList = {
  MainScreen: undefined;
  AboutScreen: undefined;
  BookedScreen: undefined;
  CreateScreen: undefined;
  PostScreen: {
    postId: string;
    postDescription: string;
    postDate: string;
    isBooked: boolean;
  };
};

type MainScreenNavigationProp = StackNavigationProp<
  AppNavigationParamList,
  'MainScreen'
>;

type MainScreenProps = {
  navigation: MainScreenNavigationProp;
};

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const openItem = (post: IPost) => {
    navigation.navigate('PostScreen', {
      postId: post.id,
      postDescription: post.text,
      postDate: post.date,
      isBooked: post.booked,
    });
  };

  const keyExtractor = useCallback((post: IPost) => post.id.toString(), []);

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => <Post post={item} openItem={openItem} />}
      />
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
