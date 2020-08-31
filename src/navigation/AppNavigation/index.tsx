import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TabNavigation from 'navigation/TabNavigation';
import {
  CreateStackScreen,
  AboutStackScreen,
} from 'navigation/StackNavigators';
import THEME from 'theme';

const AppDrawer = createDrawerNavigator();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <AppDrawer.Navigator
        initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: THEME.MAIN_COLOR,
          itemStyle: { marginVertical: 15 },
        }}>
        <AppDrawer.Screen
          name="Home"
          component={TabNavigation}
          options={{
            title: 'Home',
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" color={color} size={24} />
            ),
          }}
        />
        <AppDrawer.Screen
          name="About App"
          component={AboutStackScreen}
          options={{
            title: 'About App',
            drawerIcon: ({ color }) => (
              <Ionicons
                name="information-circle-outline"
                color={color}
                size={24}
              />
            ),
          }}
        />
        <AppDrawer.Screen
          name="Create New Post"
          component={CreateStackScreen}
          options={{
            title: 'Create New Post',
            drawerIcon: ({ color }) => (
              <Ionicons name="create-outline" color={color} size={24} />
            ),
          }}
        />
      </AppDrawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
