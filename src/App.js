// import logo = './logo.svg';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Loader from './componant/Loader';
import About from './componant/About';
import Navbar from './Navbar';
import Profile from './componant/Profile';
import InputCard from './componant/InputCard';
import Navbars from './componant/Navbars';
import Bottom from './componant/Bottom';



function App() {
  
  return (
    <div className="App ">
      <HashRouter>
       <div className="w-full h-[100vh] overflow-hidden bg-gray-200 relative flex flex-row overflow-x-hidden">
        {/* <img src="/bg.png" alt="bg" className='a absolute top-0 left-0 right-0 bottom-0 -z-20' /> */}
        <Navbar/>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/loader' element={<Loader/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/inputcard' element={<InputCard/>}/>
          <Route path='/navbar' element={<Navbars/>}/>
          <Route path='/bottom' element={<Bottom/>}/>
        </Routes>
       </div>
      </HashRouter>
    
    </div>
  );
}

export default App;
