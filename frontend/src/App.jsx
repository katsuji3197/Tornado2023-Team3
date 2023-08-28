import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { DefaultLayout }       from "./layouts/DefaultLayout";
import { PlainLayout }         from "./layouts/PlainLayout";

import { TopPage }             from "./pages/TopPage";
import { LoginPage }           from "./pages/auth/LoginPage";
import { SignUpPage }          from "./pages/auth/SignUpPage";
import { DashboardPage }       from "./pages/users/DashboardPage";
import { EditProfilePage }     from "./pages/users/EditProfilePage";
import { AccountSettingsPage } from "./pages/users/AccountSettingsPage";
import { MatchingPage }        from "./pages/matches/MatchingPage";
import { StartCommunication }  from "./pages/matches/StartCommunication";
import { MatchInputPage }      from "./pages/matches/MatchInputPage";
import { MatchResultPage }     from "./pages/matches/MatchResultPage";
import { MatchWaitingPage }    from "./pages/matches/MatchWaitingPage";
import { MatchedPage}          from "./pages/matches/MatchedPage.jsx";

import "./assets/styles/tailwind.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PlainLayout>
              <TopPage />
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
        <Route
          path="/matching"
          element={
            <DefaultLayout>
              <MatchingPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/start-communication"
          element={
            <DefaultLayout>
              <StartCommunication />
            </DefaultLayout>
          }
        />
        <Route
          path="/match-input"
          element={
            <DefaultLayout>
              <MatchInputPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/match-result"
          element={
            <DefaultLayout>
              <MatchResultPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/match-waiting"
          element={
            <DefaultLayout>
              <MatchWaitingPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/matched"
          element={
            <DefaultLayout>
              <MatchedPage />
            </DefaultLayout>
          }
        />
      </Routes>
    </Router>
  );
}
