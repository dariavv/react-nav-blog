/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import THEME from 'theme';

interface IHeaderIcon {
  title: string;
  iconName: string;
  onPress: () => void;
}

const HeaderIcon: React.FC<IHeaderIcon> = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={24}
      color={Platform.OS === 'android' ? THEME.WHITE_COLOR : THEME.TEXT_COLOR}
    />
  );
};

export default HeaderIcon;
