import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import THEME from 'theme';
import AboutScreen from 'screens/AboutScreen';
import HeaderNavButtons from 'components/HeaderNavButtons';
import SCREEN_OPTIONS from 'constants';
import { ScreenOptions } from 'interfaces';

const AboutStack = createStackNavigator();

export const AboutStackScreen: React.FC = ({ navigation }: any) => {
  return (
    <AboutStack.Navigator
      screenOptions={(SCREEN_OPTIONS as unknown) as ScreenOptions}>
      <AboutStack.Screen
        component={AboutScreen}
        name="AboutScreen"
        options={{
          title: 'About App',
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android'
                ? THEME.DANGER_COLOR
                : THEME.BORDER_COLOR,
          },
          headerTintColor:
            Platform.OS === 'android' ? THEME.WHITE_COLOR : THEME.MAIN_COLOR2,
          headerLeft: () => (
            <HeaderNavButtons
              title="Drawer"
              iconName="menu-outline"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        }}
      />
    </AboutStack.Navigator>
  );
};
