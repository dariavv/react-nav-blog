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
const AboutStack = createStackNavigator();
const CreateStack = createStackNavigator();

export const HomeStackScreen: React.FC = ({ navigation }: any) => {
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

export const BookedStackScreen: React.FC = ({ navigation }: any) => {
  return (
    <BookedStack.Navigator screenOptions={SCREEN_OPTIONS}>
      <BookedStack.Screen
        name="BookedScreen"
        component={BookedScreen}
        options={{
          title: 'Booked',
          headerLeft: () => (
            <HeaderNavButtons
              title="Drawer"
              iconName="menu-outline"
              onPress={() => navigation.toggleDrawer()}
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

export const AboutStackScreen: React.FC = ({ navigation }: any) => {
  return (
    <AboutStack.Navigator screenOptions={SCREEN_OPTIONS}>
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
            Platform.OS === 'android' ? THEME.WHITE_COLOR : THEME.DANGER_COLOR,
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

export const CreateStackScreen: React.FC = ({ navigation }: any) => {
  return (
    <CreateStack.Navigator screenOptions={SCREEN_OPTIONS}>
      <CreateStack.Screen
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
    </CreateStack.Navigator>
  );
};
