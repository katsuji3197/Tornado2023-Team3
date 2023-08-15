import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { PlainLayout } from "./layouts/PlainLayout";

import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { DashboardPage } from "./pages/DashboardPage";
import { EditProfilePage } from "./pages/EditProfilePage";
import { AccountSettingsPage } from "./pages/AccountSettingsPage";

import "./assets/styles/tailwind.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PlainLayout>
              <HomePage />
            </PlainLayout>
          }
        />
        <Route
          path="/login"
          element={
            <PlainLayout>
              <LoginPage />
            </PlainLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <PlainLayout>
              <SignUpPage />
            </PlainLayout>
          }
        />
        <Route
          path="/mypage"
          element={
            <DefaultLayout>
              <DashboardPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <DefaultLayout>
              <EditProfilePage />
            </DefaultLayout>
          }
        />
        <Route
          path="/account-settings"
          element={
            <DefaultLayout>
              <AccountSettingsPage />
            </DefaultLayout>
          }
        />
      </Routes>
    </Router>
  );
}
