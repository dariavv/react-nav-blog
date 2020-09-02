import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderIcon from 'components/HeaderIcon';

interface IHeaderNavButtons {
  title: string;
  iconName: string;
  onPress: () => void;
}

const HeaderNavButtons: React.FC<IHeaderNavButtons> = ({
  title,
  iconName,
  onPress,
}) => {
  return (
    <HeaderButtons HeaderButtonComponent={HeaderIcon}>
      <Item title={title} iconName={iconName} onPress={onPress} />
    </HeaderButtons>
  );
};

export default HeaderNavButtons;
