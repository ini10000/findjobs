import React from "react";
import { Route, Routes } from "react-router-dom";
import * as ROUTES from "./routes";

import RequireAuth from "../components/RequireAuth";
import Login from "../screens/Login";
import LandingPageGuest from "../screens/LandingPageGuest";
import Admin from "../screens/LandingPageAdmin";
import Apply from "../screens/JobAppForm";
import Create from "../screens/JobCreateForm";
import Error from "../screens/Error";

export default function main() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<LandingPageGuest />} />
      <Route path={ROUTES.JOB_APPLY} exact element={<Apply />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route
        path={ROUTES.ADMIN_HOME}
        exact
        element={
          <RequireAuth redirectTo={ROUTES.LOGIN}>
            <Admin />
          </RequireAuth>
        }
      />
      <Route
        path={ROUTES.CREATE_JOB}
        exact
        element={
          <RequireAuth redirectTo={ROUTES.LOGIN}>
            <Create />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
