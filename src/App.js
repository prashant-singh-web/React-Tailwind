// import logo = './logo.svg';
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./componant/Loader";
import About from "./componant/About";
import Navbar from "./Navbar";
import InputCard from "./componant/InputCard";

import Stats from "./componant/Stats/Stats";
import BottomMain from "./BottomMain";
import Bottom from "./componant/Bottom_component/Bottom";
import TrustedCompany from "./componant/TrustedCompany/TrustedCompany";
import Pricing from "./componant/Pricing/Pricing";
import Profilecard from "./componant/Profile_card/Profilecard";
import Buttun from "./componant/Button_component/Button";
import Homepage from "./componant/Web_Tools/Homepage";
import ErrorPage from "./componant/ErrorPage/ErrorPage";
import ImageBox from "./componant/ImageBox/ImageBox";
import Navbars from "./componant/Navbar_component/Navbars";
import LANDING_PAGE from "./componant/Landing_page/Landingpage";
import ProductInfo from "./componant/ProductInfoPage/ProductInfo";




function App() {
  return (
    <div className="App ">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/profile" element={<Profilecard />} />
          <Route path="/inputcard" element={<InputCard />} />
          <Route path="/navbar" element={<Navbars />} />
          <Route path="/bottom" element={<Bottom />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/trustedCompany" element={<TrustedCompany />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/button" element={<Buttun />} />
          <Route path="/tools" element={<Homepage />} />
          <Route path="/ErrorPage" element={<ErrorPage />} />
          <Route path="/imageBox" element={<ImageBox />} />
          <Route path="/landingpage" element={<LANDING_PAGE />} />
          <Route path="/ProductInfo" element={<ProductInfo />} />
        </Routes>
        <BottomMain />
      </HashRouter>
    </div>
  );
}

export default App;
