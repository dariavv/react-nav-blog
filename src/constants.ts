import { Platform } from 'react-native';
import THEME from 'theme';

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

export default SCREEN_OPTIONS;
