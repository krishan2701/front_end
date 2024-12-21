import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApplePage from "./pages/Mobiles/ApplePage"; // Import the ApplePage component
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="page-container">
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
          
          {/* Apple Mobiles Route */}
          <Route path="/mobiles/apple" element={<ApplePage />} />
          
          {/* Other Routes */}
          <Route path="/mobiles/samsung" element={<h1>This is Samsung page</h1>} />
          <Route path="/mobiles/oneplus" element={<h1>This is OnePlus page</h1>} />
          <Route path="/laptops/dell" element={<h1>This is Dell page</h1>} />
          <Route path="/laptops/hp" element={<h1>This is HP page</h1>} />
          <Route path="/laptops/lenovo" element={<h1>This is Lenovo page</h1>} />
          <Route path="/televisions/sony" element={<h1>This is Sony page</h1>} />
          <Route path="/televisions/lg" element={<h1>This is LG page</h1>} />
          <Route path="/televisions/samsung" element={<h1>This is Samsung page</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
