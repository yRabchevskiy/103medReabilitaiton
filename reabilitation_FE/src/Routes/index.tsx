import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Role } from '../Api/models/admin_models';
import AdminLayout from '../Layouts/AdminLayout';
import StaffLayout from '../Layouts/StaffLayout';
import AdminHomePage from '../Pages/AdminHomePage';
import EditorPage from '../Pages/EditorPage';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import PrivateRoute from './PrivateRoute';
import { admin_links, general_links, staff_links } from './routes_config';


const AppRoutes: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={admin_links.main.path} element={
          <PrivateRoute role={[Role.Admin]}>
            <AdminLayout />
          </PrivateRoute>}>
          <Route index element={<AdminHomePage />} />
          <Route path={admin_links.users.path} element={<>Users</>} />
        </Route>
        <Route path={staff_links.main.path} element={
          <PrivateRoute role={[Role.Admin, Role.Doctor, Role.Staff]}>
            <StaffLayout />
          </PrivateRoute>}>
          <Route index element={<HomePage />} />
          <Route path={staff_links.patients.path} element={<EditorPage />} />
        </Route>

        <Route path={general_links.login.path} element={<LoginPage />} />
        <Route path={general_links.unknown.path} element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;