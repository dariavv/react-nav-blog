import React, { useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import { AppNavigationParamList, IState } from 'interfaces';
import PostList from 'components/PostList';
import { loadPosts } from 'store/actions/postAction';

type MainScreenProps = {
  navigation: StackNavigationProp<AppNavigationParamList, 'MainScreen'>;
};

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const allPosts = useSelector<IState>((state) => state.post.allPosts);

  return <PostList data={allPosts} navigation={navigation} />;
};

export default MainScreen;
