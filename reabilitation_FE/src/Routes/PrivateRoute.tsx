import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Role } from '../Api/models/admin_models';
import { general_links } from './routes_config';

interface Props {
  role: Role[]; 
}
const PrivateRoute: React.FC<Props> = (props: Props) => {
  let auth = { 'token': true, role: Role.Staff }
  return (
    auth.token && props.role.indexOf(auth.role) !== -1  ? <Outlet /> : <Navigate to={general_links.login.path} />
  )
}

export default PrivateRoute;