
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Homecategory } from './Pages/Homecategory';
import { Home } from './Pages/Home';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { AboutUs } from './Pages/AboutUs';
import { Login } from './Pages/Login';
import { HomeBanner } from './Components/HomeBanner/HomeBanner';
import { Footer } from './Components/Footer/Footer';
import {Item} from './Components/Item/Item'
import { product } from './Pages/Product';
import Clothesbanner from './Components/Assets/Clothesbanner.png'
import HomeMakeupbnanner from './Components/Assets/HomeMakeupbnanner.png'
import AccessoriesBanner from './Components/Assets/AccessoriesBanner.png'







function App() {
  return (
    <div>
      <BrowserRouter>
     <Navbar/>
     
     <Routes>
     <Route  path='/' element={<Home/>}/>
     <Route path='/Clothing'   element={<Homecategory  banner={Clothesbanner}  category="women"/>}/>
     <Route path='/Beauty'   element={<Homecategory  banner={HomeMakeupbnanner}  category="Makeup"/>}/>
     <Route path='/Accessories'   element={<Homecategory   banner={AccessoriesBanner}  category="Accessories"/>}/>
     <Route path='/product'    element={<Product/>}>
     <Route path=':ProductId'  element={<Product/>}/>
     </Route>
     <Route path='/cart'  element={<Cart/>}/>
     <Route path='/Aboutus' element={<AboutUs/>}/>
     <Route path='/Login'   element={<Login/>}/>
     </Routes>

     <Footer/>
    

     </BrowserRouter>
    </div>
  );
}

export default App;
