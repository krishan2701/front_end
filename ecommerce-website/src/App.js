
// // src/App.js
// import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ApplePage from "./pages/Mobiles/ApplePage";
// import SamsungPage from "./pages/Mobiles/SamsungPage";
// import OnePlusPage from "./pages/Mobiles/OnePlusPage";
// import DellPage from "./pages/Laptops/DellPage";
// import HPPage from "./pages/Laptops/HPPage";
// import LenovoPage from "./pages/Laptops/LenovoPage";
// import SonyPage from "./pages/Televisions/SonyPage";
// import LGPage from "./pages/Televisions/LGPage";
// import SamsungTVPage from "./pages/Televisions/SamsungTVPage";
// import CartPage from "./pages/CartPage/CartPage";
// import { CartProvider } from "./contexts/CartContext";
// import "./App.scss";

// const App = () => {
//   return (
//     <CartProvider>
//       <Router>
//         <Navbar />
//         <div className="page-container">
//           <Routes>
//             <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
//             <Route path="/mobiles/apple" element={<ApplePage />} />
//             <Route path="/mobiles/samsung" element={<SamsungPage />} />
//             <Route path="/mobiles/oneplus" element={<OnePlusPage />} />
//             <Route path="/laptops/dell" element={<DellPage />} />
//             <Route path="/laptops/hp" element={<HPPage />} />
//             <Route path="/laptops/lenovo" element={<LenovoPage />} />
//             <Route path="/televisions/sony" element={<SonyPage />} />
//             <Route path="/televisions/lg" element={<LGPage />} />
//             <Route path="/televisions/samsung" element={<SamsungTVPage />} />
//             <Route path="/cart" element={<CartPage />} />
//           </Routes>
//         </div>
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;

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
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import { CartProvider } from "./contexts/CartContext";
import "./App.scss";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mobiles/apple" element={<ApplePage />} />
            <Route path="/mobiles/samsung" element={<SamsungPage />} />
            <Route path="/mobiles/oneplus" element={<OnePlusPage />} />
            <Route path="/laptops/dell" element={<DellPage />} />
            <Route path="/laptops/hp" element={<HPPage />} />
            <Route path="/laptops/lenovo" element={<LenovoPage />} />
            <Route path="/televisions/sony" element={<SonyPage />} />
            <Route path="/televisions/lg" element={<LGPage />} />
            <Route path="/televisions/samsung" element={<SamsungTVPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
