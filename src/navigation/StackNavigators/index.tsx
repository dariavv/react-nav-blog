import 'react-native-gesture-handler';
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { format } from 'date-fns';

import THEME from 'theme';
import BookedScreen from 'screens/BookedScreen';
import PostScreen from 'screens/PostScreen';
import MainScreen from 'screens/MainScreen';
import AboutScreen from 'screens/AboutScreen';
import CreateScreen from 'screens/CreateScreen';
import HeaderNavButtons from 'components/HeaderNavButtons';

const SCREEN_OPTIONS = {
  headerStyle: {
    backgroundColor:
      Platform.OS === 'android' ? THEME.MAIN_COLOR : THEME.BORDER_COLOR,
  },
  headerTintColor:
    Platform.OS === 'android' ? THEME.WHITE_COLOR : THEME.TEXT_COLOR,
  headerTitleStyle: {
    fontSize: 24,
    fontFamily: 'BadScript-Regular',
  },
};

const HomeStack = createStackNavigator();
const BookedStack = createStackNavigator();

export const HomeStackScreen: React.FC = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="MainScreen"
      screenOptions={SCREEN_OPTIONS}>
      <HomeStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: 'Instagram',
          headerRight: () => (
            <HeaderNavButtons
              title="Photo"
              iconName="camera-outline"
              onPress={() => {}}
            />
          ),
          headerLeft: () => (
            <HeaderNavButtons
              title="Burger"
              iconName="menu-outline"
              onPress={() => {}}
            />
          ),
        }}
      />
      <HomeStack.Screen
        component={AboutScreen}
        name="AboutScreen"
        options={{
          title: 'About',
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android'
                ? THEME.DANGER_COLOR
                : THEME.BORDER_COLOR,
          },
          headerTintColor:
            Platform.OS === 'android' ? THEME.WHITE_COLOR : THEME.DANGER_COLOR,
        }}
      />
      <HomeStack.Screen
        name="BookedScreen"
        component={BookedScreen}
        options={{
          title: 'Booked',
          headerRight: () => (
            <HeaderNavButtons
              title="Photo"
              iconName="camera-outline"
              onPress={() => {}}
            />
          ),
          headerLeft: () => (
            <HeaderNavButtons
              title="Burger"
              iconName="menu-outline"
              onPress={() => {}}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="CreateScreen"
        component={CreateScreen}
        options={{
          title: 'Create',
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
    </HomeStack.Navigator>
  );
};

export const BookedStackScreen: React.FC = () => {
  return (
    <BookedStack.Navigator screenOptions={SCREEN_OPTIONS}>
      <BookedStack.Screen
        name="BookedScreen"
        component={BookedScreen}
        options={{
          title: 'Booked',
          headerLeft: () => (
            <HeaderNavButtons
              title="Burger"
              iconName="menu-outline"
              onPress={() => {}}
            />
          ),
        }}
      />
      <BookedStack.Screen
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
    </BookedStack.Navigator>
  );
};
