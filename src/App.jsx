import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import GroupPage from "./pages/GroupPage";
import NotFound from "./components/NotFound";
import HomePage from "./components/HomePage";
import SignupForm from "./components/SignupForm";

function Layout() {
  const location = useLocation();

  // Hide Navbar if the page is NotFound (i.e., when path is not in known routes)
  const validPaths = [];
  const showNavbar = validPaths.includes(location.pathname);

  return (
    <div>
      {showNavbar}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/GroupPage" element={<GroupPage />} />
        <Route path="/Signup" element={<SignupForm />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
