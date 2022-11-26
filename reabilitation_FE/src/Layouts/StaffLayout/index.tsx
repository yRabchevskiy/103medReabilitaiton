import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header';
import { staff_links } from '../../Routes/routes_config';
import { LayoutContainer, MainContainer } from '../style';

interface Props { }

const StaffLayout: React.FC<Props> = (props: Props) => {
  return (
    <LayoutContainer>
      <Header navigateSettings={staff_links} />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </LayoutContainer>
  );
};

export default React.memo(StaffLayout);
