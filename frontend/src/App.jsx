import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { PlainLayout } from "./layouts/PlainLayout";

import { TopPage } from "./pages/TopPage";
import { LoginPage } from "./pages/auth/LoginPage";
import { SignUpPage } from "./pages/auth/SignUpPage";
import { DashboardPage } from "./pages/users/DashboardPage";
import { EditProfilePage } from "./pages/users/EditProfilePage";
import { AccountSettingsPage } from "./pages/users/AccountSettingsPage";
import { MatchingPage } from "./pages/matches/MatchingPage";
import { StartCommunication } from "./pages/matches/StartCommunication";
import { MatchInputPage } from "./pages/matches/MatchInputPage";
import { MatchResultPage } from "./pages/matches/MatchResultPage";
import { MatchWaitingPage } from "./pages/matches/MatchWaitingPage";
import { MatchedPage } from "./pages/matches/MatchedPage.jsx";
import { MessagePage } from "./pages/messages/MessagePage";
import { NotePage } from "./pages/matches/Aliennote";
import { RecruitListPage } from "./pages/recruit/RecruitListPage";
import { CreateRecruitPage } from "./pages/recruit/CreateRecruitPage";
import { NotificationsPage } from "./pages/recruit/NotificationsPage.jsx";

import { getCurrentUser } from "./api/auth";

import "./assets/styles/tailwind.css";

// 認証情報の共有用コンテキスト
export const AuthContext = createContext({
  loading: true,
  isSignedIn: false,
  currentUser: null,
  setCurrentUser: () => {},
  setIsSignedIn: () => {},
});

// 認証ステータスやユーザー情報を管理するカスタムフック
const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();

      if (res?.data.isLogin === true) {
        setIsSignedIn(true);
        setCurrentUser(res?.data.data);
      } else {
        console.log("No current user");
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    handleGetCurrentUser();
  }, [setCurrentUser, setIsSignedIn]);

  return { loading, isSignedIn, currentUser, setCurrentUser, setIsSignedIn };
};

// 認証済みのユーザーのみにコンテンツを表示するプライベートルートコンポーネント
const PrivateRouteContent = ({
  component: Component,
  layout: Layout,
  ...props
}) => {
  const auth = useContext(AuthContext);
  const { loading, isSignedIn } = auth;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn && !loading) {
      navigate("/");
    }
  }, [isSignedIn, loading, navigate]);

  if (loading) {
    return null;
  }

  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

PrivateRouteContent.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func.isRequired,
};

export const App = () => {
  const auth = useAuth();

  return (
    <Router>
      <AuthContext.Provider value={auth}>
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
              <PrivateRouteContent
                component={DashboardPage}
                layout={DefaultLayout}
              />
            }
          />
          <Route
            path="/edit-profile"
            element={
              <PrivateRouteContent
                component={EditProfilePage}
                layout={DefaultLayout}
              />
            }
          />
          <Route
            path="/account-settings"
            element={
              <PrivateRouteContent
                component={AccountSettingsPage}
                layout={DefaultLayout}
              />
            }
          />
          <Route
            path="/match"
            element={
              <PrivateRouteContent
                component={MatchingPage}
                layout={DefaultLayout}
              />
            }
          />
          <Route
            path="/start-communication"
            element={
              <PrivateRouteContent
                component={StartCommunication}
                layout={DefaultLayout}
              />
            }
          />
          <Route
            path="/match-input"
            element={
              <PrivateRouteContent
                component={MatchInputPage}
                layout={DefaultLayout}
              />
            }
          />
          <Route
            path="/match-result"
            element={
              <PrivateRouteContent
                component={MatchResultPage}
                layout={DefaultLayout}
              />
            }
          />
          <Route
            path="/match-waiting"
            element={
              <PrivateRouteContent
                component={MatchWaitingPage}
                layout={DefaultLayout}
              />
            }
          />
          <Route
            path="/matched"
            element={
              <PrivateRouteContent
                component={MatchedPage}
                layout={DefaultLayout}
              />
            }
          />
          <Route
            path="/message"
            element={
              <PrivateRouteContent
                component={MessagePage}
                layout={DefaultLayout}
              />
            }
          />
          <Route
            path="/note"
            element={
              <PrivateRouteContent
                component={NotePage}
                layout={DefaultLayout}
              />
            }
          />
          <Route
            path="/recruit"
            element={
              <PrivateRouteContent
                component={RecruitListPage}
                layout={DefaultLayout}
              />
            }
          />
          <Route
            path="/recruit/new"
            element={
              <PrivateRouteContent
                component={CreateRecruitPage}
                layout={DefaultLayout}
              />
            }
          />
          <Route
            path="/notifications"
            element={
              <PrivateRouteContent
                component={NotificationsPage}
                layout={DefaultLayout}
              />
            }
          />
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
};
