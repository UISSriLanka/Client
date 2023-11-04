import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Header/header";
import Footer from "./components/Footer/footer";
import LandingPage from "./view/LandingPage/landinPage";
import AboutUs from "./components/section/aboutus";
import School from "./components/section/OurSchool";
import ContactUs from "./components/section/ContactUs";
import Events from "./view/Events/Events";
import Home from "./components/section/home";
import Gallery from "./components/section/Gallery";

function App() {
  return (
    <Router>
      <div>
        <HeaderRoutes />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/School" element={<School />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
        <FooterRoutes />
      </div>
    </Router>
  );
}
const includedPaths = [
  "/",
  "/About",
  "/School",
  "/Events",
  "/Contact",
  "/Gallery",
];

function HeaderRoutes() {
  const location = useLocation();
  const excludeHeader = includedPaths.includes(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <React.Fragment>{excludeHeader && <Navbar />}</React.Fragment>;
}

function FooterRoutes() {
  const location = useLocation();
  const excludeFooter = includedPaths.includes(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <React.Fragment>{excludeFooter && <Footer />}</React.Fragment>;
}

export default App;
