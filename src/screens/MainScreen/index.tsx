import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import DATA from 'data';
import { AppNavigationParamList } from 'interfaces';
import PostList from 'components/PostList';

type MainScreenProps = {
  navigation: StackNavigationProp<AppNavigationParamList, 'MainScreen'>;
};

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  return <PostList data={DATA} navigation={navigation} />;
};

export default MainScreen;
