import 'react-native-gesture-handler';
import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { format } from 'date-fns';

import THEME from 'theme';
import MainScreen from 'screens/MainScreen';
import AboutScreen from 'screens/AboutScreen';
import BookedScreen from 'screens/BookedScreen';
import CreateScreen from 'screens/CreateScreen';
import PostScreen from 'screens/PostScreen';
import HeaderNavButtons from 'components/HeaderNavButtons';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
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
        }}>
        <Stack.Screen
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
        <Stack.Screen
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
              Platform.OS === 'android'
                ? THEME.WHITE_COLOR
                : THEME.DANGER_COLOR,
          }}
        />
        <Stack.Screen
          name="BookedScreen"
          component={BookedScreen}
          options={{
            title: 'Booked',
          }}
        />
        <Stack.Screen
          name="CreateScreen"
          component={CreateScreen}
          options={{
            title: 'Create',
          }}
        />
        <Stack.Screen
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
