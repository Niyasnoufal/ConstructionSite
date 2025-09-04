import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import{Routes, Route} from "react-router-dom"
import Footer from "./components/Footer";
import ConstuctionService from "./Pages/ConstuctionService";
import DesignService from "./Pages/DesignService";
import Contact from "./Pages/Contact";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        {/* Child routes */}
         <Route index element={<Home />} />
        </Route>
        <Route path="/constructionandrenovation" element={<Layout/>}>
          <Route index element={<ConstuctionService/>}/>
        </Route>
        <Route path="/designandplanning" element={<Layout/>}>
          <Route index element={<DesignService/>} />
        </Route>

        <Route path="/contact" element={<Layout/>}>
          <Route path="/contact" element={<Contact />}/>
        </Route>
        
      </Routes>
      <Footer/>
    </>
      
      
        
  
  );
};

export default App;
