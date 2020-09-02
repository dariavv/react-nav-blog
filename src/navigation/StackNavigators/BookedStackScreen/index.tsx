import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { format } from 'date-fns';

import BookedScreen from 'screens/BookedScreen';
import PostScreen from 'screens/PostScreen';
import HeaderNavButtons from 'components/HeaderNavButtons';
import SCREEN_OPTIONS from 'constants';
import { ScreenOptions } from 'interfaces';

const BookedStack = createStackNavigator();

export const BookedStackScreen: React.FC = ({ navigation }: any) => {
  return (
    <BookedStack.Navigator
      screenOptions={(SCREEN_OPTIONS as unknown) as ScreenOptions}>
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
