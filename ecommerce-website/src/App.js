import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import brand pages
import ApplePage from "./pages/Mobiles/ApplePage";
import OnePlusPage from "./pages/Mobiles/OnePlusPage";
import SamsungMobilePage from "./pages/Mobiles/SamsungPage";

import DellPage from "./pages/Laptops/DellPage";
import HPPage from "./pages/Laptops/HPPage";
import LenovoPage from "./pages/Laptops/LenovoPage";

import SonyPage from "./pages/Televisions/SonyPage";
import LGPage from "./pages/Televisions/LGPage";
import SamsungTVPage from "./pages/Televisions/SamsungPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Mobile brand routes */}
          <Route path="/mobiles/apple" element={<ApplePage />} />
          <Route path="/mobiles/oneplus" element={<OnePlusPage />} />
          <Route path="/mobiles/samsung" element={<SamsungMobilePage />} />

          {/* Laptop brand routes */}
          <Route path="/laptops/dell" element={<DellPage />} />
          <Route path="/laptops/hp" element={<HPPage />} />
          <Route path="/laptops/lenovo" element={<LenovoPage />} />

          {/* Television brand routes */}
          <Route path="/televisions/sony" element={<SonyPage />} />
          <Route path="/televisions/lg" element={<LGPage />} />
          <Route path="/televisions/samsung" element={<SamsungTVPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
