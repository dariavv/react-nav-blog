import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderIcon from 'components/HeaderIcon';
import { IHeaderIcon } from 'interfaces';

const HeaderNavButtons: React.FC<IHeaderIcon> = ({
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
