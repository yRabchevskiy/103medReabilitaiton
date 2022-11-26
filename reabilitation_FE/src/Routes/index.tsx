import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLayout from '../Layouts/AdminLayout';
import StaffLayout from '../Layouts/StaffLayout';
import AdminHomePage from '../Pages/AdminHomePage';
import EditorPage from '../Pages/EditorPage';
import HomePage from '../Pages/HomePage';
import { admin_links, staff_links } from './routes_config';


const AppRoutes: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={staff_links.main.path} element={<StaffLayout />}>
          <Route index element={<HomePage />} />
          <Route path={staff_links.patients.path} element={<EditorPage />} />
          {/* <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Route>
        <Route path={admin_links.main.path} element={<AdminLayout />}>
          <Route index element={<AdminHomePage />} />
          <Route path={admin_links.users.path} element={<>Users</>} />
          {/* <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;