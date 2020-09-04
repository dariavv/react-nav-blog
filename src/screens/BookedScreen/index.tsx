import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import PostList from 'components/PostList';
import { AppNavigationParamList, IState } from 'interfaces';

type BookedScreenProps = {
  navigation: StackNavigationProp<AppNavigationParamList, 'BookedScreen'>;
};

const BookedScreen: React.FC<BookedScreenProps> = ({ navigation }) => {
  const bookedData = useSelector<IState>((state) => state.post.bookedPosts);

  return <PostList data={bookedData} navigation={navigation} />;
};

export default BookedScreen;
