import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import { admin_links } from "../../Routes/routes_config";
import { LayoutContainer, MainContainer } from "../style";

interface Props { }

const AdminLayout: React.FC<Props> = (props: Props) => {
  return (
    <LayoutContainer>
      <Header navigateSettings={admin_links} />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </LayoutContainer>
  )
}

export default React.memo(AdminLayout);