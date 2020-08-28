import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import PostList from 'components/PostList';
import { IPost, AppNavigationParamList } from 'interfaces';
import DATA from 'data';

type BookedScreenProps = {
  navigation: StackNavigationProp<AppNavigationParamList, 'BookedScreen'>;
};

const BookedScreen: React.FC<BookedScreenProps> = ({ navigation }) => {
  const openItem = (post: IPost) => {
    navigation.navigate('PostScreen', {
      postId: post.id,
      postDescription: post.text,
      postDate: post.date,
      isBooked: post.booked,
    });
  };

  const bookedData = DATA.filter((post: IPost) => post.booked === true);

  return <PostList data={bookedData} openItem={openItem} />;
};

export default BookedScreen;
