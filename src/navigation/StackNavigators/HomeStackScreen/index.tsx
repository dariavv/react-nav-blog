import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { format } from 'date-fns';

import PostScreen from 'screens/PostScreen';
import MainScreen from 'screens/MainScreen';
import CreateScreen from 'screens/CreateScreen';
import HeaderNavButtons from 'components/HeaderNavButtons';
import SCREEN_OPTIONS from 'constants';
import { ScreenOptions } from 'interfaces';

const HomeStack = createStackNavigator();

export const HomeStackScreen: React.FC = ({ navigation }: any) => {
  return (
    <HomeStack.Navigator
      initialRouteName="MainScreen"
      screenOptions={(SCREEN_OPTIONS as unknown) as ScreenOptions}>
      <HomeStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: 'HelloWorld',
          headerRight: () => (
            <HeaderNavButtons
              title="Photo"
              iconName="camera-outline"
              onPress={() => navigation.navigate('CreateScreen')}
            />
          ),
          headerLeft: () => (
            <HeaderNavButtons
              title="Drawer"
              iconName="menu-outline"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="PostScreen"
        component={PostScreen}
        options={({ route }: any) => ({
          title: `Post ${format(
            new Date(route.params.postDate),
            'dd-MM-yyyy',
          )}`,
          headerRight: () => (
            <HeaderNavButtons
              title="Star"
              iconName={route.params.isBooked ? 'star' : 'star-outline'}
              onPress={() => {}}
            />
          ),
        })}
      />
      <HomeStack.Screen
        name="CreateScreen"
        component={CreateScreen}
        options={{
          title: 'Create New Post',
          headerLeft: () => (
            <HeaderNavButtons
              title="Drawer"
              iconName="menu-outline"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};
