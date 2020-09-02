import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreateScreen from 'screens/CreateScreen';
import HeaderNavButtons from 'components/HeaderNavButtons';
import SCREEN_OPTIONS from 'constants';
import { ScreenOptions } from 'interfaces';

const CreateStack = createStackNavigator();

export const CreateStackScreen: React.FC = ({ navigation }: any) => {
  return (
    <CreateStack.Navigator
      screenOptions={(SCREEN_OPTIONS as unknown) as ScreenOptions}>
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
