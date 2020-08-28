import 'react-native-gesture-handler';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import THEME from 'theme';
import { HomeStackScreen, BookedStackScreen } from 'navigation/StackNavigators';

const AndroidTab = createMaterialBottomTabNavigator();

const AndroidTabNavigation: React.FC = () => {
  return (
    <AndroidTab.Navigator
      initialRouteName="Home"
      activeColor={THEME.WHITE_COLOR}
      inactiveColor={THEME.MAIN_COLOR4}
      barStyle={{ backgroundColor: THEME.MAIN_COLOR }}>
      <AndroidTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={24} />
          ),
        }}
      />
      <AndroidTab.Screen
        name="Bookmarked"
        component={BookedStackScreen}
        options={{
          tabBarLabel: 'Bookmarked',
          tabBarIcon: ({ color }) => (
            <Ionicons name="star" color={color} size={24} />
          ),
        }}
      />
    </AndroidTab.Navigator>
  );
};

export default AndroidTabNavigation;
