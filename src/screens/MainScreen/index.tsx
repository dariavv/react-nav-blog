import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import DATA from 'data';
import { IPost, AppNavigationParamList } from 'interfaces';
import PostList from 'components/PostList';

type MainScreenProps = {
  navigation: StackNavigationProp<AppNavigationParamList, 'MainScreen'>;
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

  return <PostList data={DATA} openItem={openItem} />;
};

export default MainScreen;
