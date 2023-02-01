import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import UserSettings from "./pages/UserSettings";

const PrivateRoute = ({ children }) => {
  return localStorage.getItem(process.env.REACT_APP_HEADER_STRING) ? (
    children
  ) : (
    <Navigate to="/" />
  );
};

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/user/new" exact element={<CreateUser />} />
        <Route
          path="/home"
          exact
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile-settings"
          exact
          element={
            <PrivateRoute>
              <UserSettings />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
