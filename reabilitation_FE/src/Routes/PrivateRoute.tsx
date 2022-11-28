import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Role } from '../Api/models/admin_models';
import { AuthContext } from '../Contexts/auth/uaeAuthContext';
import { general_links } from './routes_config';

interface Props {
  role: Role[];
  children: React.ReactNode;
}
const PrivateRoute = (props: Props) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <>{user && props.role.indexOf(user.permision) !== -1 ? props.children : <Navigate to={general_links.login.path} />}</>
  );
};

export default PrivateRoute;