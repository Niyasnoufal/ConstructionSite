import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Layout = lazy(() => import("./Pages/Layout"));
const Home = lazy(() => import("./Pages/Home"));
const ConstuctionService = lazy(() => import("./Pages/ConstuctionService"));
const DesignService = lazy(() => import("./Pages/DesignService"));
const Contact = lazy(() => import("./Pages/Contact"));
const Pricing = lazy(() => import("./Pages/Pricing"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,    
      easing: "ease-in-out", 
    });
  }, []);

  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/constructionandrenovation" element={<Layout />}>
          <Route index element={<ConstuctionService />} />
        </Route>

        <Route path="/designandplanning" element={<Layout />}>
          <Route index element={<DesignService />} />
        </Route>

        <Route path="/contact" element={<Layout />}>
          <Route index element={<Contact />} />
        </Route>

        <Route path="/pricing" element={<Layout />}>
          <Route index element={<Pricing />} />
        </Route>
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default App;
