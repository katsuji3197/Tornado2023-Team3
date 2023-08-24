import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DashboardPage from "./pages/users/DashboardPage";
import { EditProfilePage } from "./pages/users/EditProfilePage";
import AccountSettingsPage from "./pages/users/AccountSettingsPage";
import { MatchInputPage } from "./pages/matches/MatchInputPage";
import { MatchResultPage } from "./pages/matches/MatchResultPage";
import { MatchWaitingPage } from "./pages/matches/MatchWaitingPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "./assets/styles/tailwind.css";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 pt-14 pb-14 overflow-y-auto">
          <Routes>
            <Route path="/mypage" element={<DashboardPage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            <Route path="/account-settings" element={<AccountSettingsPage />} />
            <Route path="/match-input" element={<MatchInputPage />} />
            <Route path="/match-result" element={<MatchResultPage />} />
            <Route path="/match-waiting" element={<MatchWaitingPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
