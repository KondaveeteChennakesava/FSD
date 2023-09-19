// import logo from './logo.svg';
// import Student from './student';
// import {trainee,a} from './person.js'; //named import
// import Event from './events.js';
// import Events1 from './events1';
import './App.css';
import Home from './Home.js';
import About from './About.js';
import Services from './services.js';
import Conatct from './contact.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Menu from './menu.js';
import Trainees from './trainees.js';
// import Random from './Random';
// import ClickCounter from './count';
// import ImageSlider from './imageSlider';
import Hooks from './hooks';
import './products.css'
import Products from './Products';
import Productsinfo from './productInfo'

function App(){
  return (
    <div className='App'>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Conatct/>} />
          <Route path="/trainees" element={<Trainees/>} />
          <Route path="/hooks" element={<Hooks/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/productInfo/:id" element={<Productsinfo/>} />
          {/* <Route path="/events" element={<Event/>} />
          <Route path="/events1" element={<Events1/>} /> */}
        </Routes>
        {/* <Random />
       <ClickCounter/>
       <ImageSlider /> */}
      </BrowserRouter>
    </div>
  )
}
export default App
