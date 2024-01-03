// import logo = './logo.svg';
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./componant/Loader";
import About from "./componant/About";
import Navbar from "./Navbar";
import InputCard from "./componant/InputCard";
import Navbars from "./componant/Navbars";
import Stats from "./componant/Stats/Stats";
import BottomMain from "./BottomMain";
import Bottom from "./componant/Bottom_component/Bottom";
import TrustedCompany from "./componant/TrustedCompany/TrustedCompany";
import Pricing from "./componant/Pricing/Pricing";
import Buttun from "./componant/Button_component/Buttun";
import Profilecard from "./componant/Profile_card/Profilecard";

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
        </Routes>
        <BottomMain />
      </HashRouter>
    </div>
  );
}

export default App;
