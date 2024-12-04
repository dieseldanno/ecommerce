import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductsPage from "./Pages/ProductsPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
