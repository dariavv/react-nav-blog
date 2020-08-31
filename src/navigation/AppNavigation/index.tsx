import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from 'navigation/TabNavigation';
import {
  CreateStackScreen,
  AboutStackScreen,
} from 'navigation/StackNavigators';

const AppDrawer = createDrawerNavigator();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <AppDrawer.Navigator initialRouteName="Home">
        <AppDrawer.Screen name="Home" component={TabNavigation} />
        <AppDrawer.Screen name="About" component={AboutStackScreen} />
        <AppDrawer.Screen name="Create" component={CreateStackScreen} />
      </AppDrawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
