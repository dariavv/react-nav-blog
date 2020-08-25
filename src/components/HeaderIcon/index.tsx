/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';

import THEME from 'theme';

const HeaderIcon = (props: any) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Icon}
      iconSize={24}
      color={Platform.OS === 'android' ? THEME.WHITE_COLOR : THEME.TEXT_COLOR}
    />
  );
};

export default HeaderIcon;
