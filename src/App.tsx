import { ProductHero } from "./components/ProductHero";
import { CountdownTimer } from "./components/CountdownTimer";
import { Features } from "./components/Features";
import { Pricing } from "./components/Pricing";
import { Checkout } from "./components/Checkout";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "./contexts/CartContext";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";

function HomePage() {
  return (
    <>
      <ProductHero />
      <CountdownTimer />
      <Features />
      <Pricing />
    </>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;