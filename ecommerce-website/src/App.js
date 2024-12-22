import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApplePage from "./pages/Mobiles/ApplePage";
import SamsungPage from "./pages/Mobiles/SamsungPage";
import OnePlusPage from "./pages/Mobiles/OnePlusPage";
import DellPage from "./pages/Laptops/DellPage";
import HPPage from "./pages/Laptops/HPPage";
import LenovoPage from "./pages/Laptops/LenovoPage";
import SonyPage from "./pages/Televisions/SonyPage";
import LGPage from "./pages/Televisions/LGPage";
import SamsungTVPage from "./pages/Televisions/SamsungTVPage";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
          <Route path="/mobiles/apple" element={<ApplePage />} />
          <Route path="/mobiles/samsung" element={<SamsungPage />} />
          <Route path="/mobiles/oneplus" element={<OnePlusPage />} />
          <Route path="/laptops/dell" element={<DellPage />} />
          <Route path="/laptops/hp" element={<HPPage />} />
          <Route path="/laptops/lenovo" element={<LenovoPage />} />
          <Route path="/televisions/sony" element={<SonyPage />} />
          <Route path="/televisions/lg" element={<LGPage />} />
          <Route path="/televisions/samsung" element={<SamsungTVPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
