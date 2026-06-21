import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import PosLanding from './pages/PosLanding';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col relative transition-all duration-300 overflow-x-clip">
          {/* Clean minimal background */}
          <div className="absolute inset-0 bg-slate-50 pointer-events-none"></div>
          
          <Navbar />
          <main className="flex-grow relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<ProductDetail />} />
              <Route path="/pos-software" element={<PosLanding />} />
            </Routes>
          </main>
          <div className="relative z-10">
            <Footer />
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
