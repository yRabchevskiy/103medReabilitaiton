import React from 'react';
import { useLocation } from 'react-router-dom';
import { INavigateSettings } from '../../Routes/model';
import { NavBarLink, NawBarContainer } from './style';

interface Props {
  navigateSettings: INavigateSettings;
}
const Header: React.FC<Props> = (props: Props) => {
  const [activeLink, setActiveLink] = React.useState<string>('');
  const location = useLocation();

  React.useEffect(() => {
    if (location && activeLink !== location.pathname) {
      console.log(location)
      setActiveLink(location.pathname)
    }
  }, [location]);
  return (
    <NawBarContainer>
      {Object.keys(props.navigateSettings).map(key => (
        <NavBarLink
          key={'link' + props.navigateSettings[key].path}
          className={activeLink === props.navigateSettings[key].path ? 'active' : ''}
          to={props.navigateSettings[key].path}
        >
          {props.navigateSettings[key].name}
        </NavBarLink>
      ))}
    </NawBarContainer>
  );
};

export default React.memo(Header);
