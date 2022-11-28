import React from 'react';
import { useLocation } from 'react-router-dom';
import { INavigateSettings } from '../../Routes/model';
import { Logo, Logout, NavBarLink, NawBarContainer } from './style';
import logo from '../../images/logo';
import { logout } from '../../images/icons';

interface Props {
  navigateSettings: INavigateSettings;
}
const Header: React.FC<Props> = (props: Props) => {
  const [activeLink, setActiveLink] = React.useState<string>('');
  const location = useLocation();

  React.useEffect(() => {
    if (location && activeLink !== location.pathname) {
      setActiveLink(location.pathname)
    }
  }, [location]);
  return (
    <NawBarContainer>
      <Logo>{logo}</Logo>
      {Object.keys(props.navigateSettings).map(key => (
        <NavBarLink
          key={'link' + props.navigateSettings[key].path}
          className={activeLink === props.navigateSettings[key].path ? 'active' : ''}
          to={props.navigateSettings[key].path}
        >
          {props.navigateSettings[key].name}
        </NavBarLink>
      ))}
      <Logout>{logout}</Logout>
    </NawBarContainer>
  );
};

export default React.memo(Header);
