import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import GroupPage from "./pages/GroupPage";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

function Layout() {
  const location = useLocation();

  // Hide Navbar if the page is NotFound (i.e., when path is not in known routes)
  const validPaths = ["/", "/GroupPage"];
  const showNavbar = validPaths.includes(location.pathname);

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/GroupPage" element={<GroupPage />} />
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
