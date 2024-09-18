
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Homecategory } from './Pages/Homecategory';
import { Home } from './Pages/Home';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { AboutUs } from './Pages/AboutUs';
import { Login } from './Pages/Login';
import { Footer } from './Components/Footer/Footer';
import { CheckoutPage } from './Pages/CheckoutPage';
import Clothesbanners from './Components/Assets/Clothesbanners.jpg'
import HomeMakeupbnanner from './Components/Assets/HomeMakeupbnanner.png'
import AccessoriesBanner from './Components/Assets/AccessoriesBanner.png'
import { Signup } from './Pages/Signup';







function App() {
  return (
    <div>
      <BrowserRouter>
     <Navbar/>

     <Routes>
     <Route  path='/' element={<Home/>}/>
     <Route path='/Clothing'   element={<Homecategory  banner={Clothesbanners}  category="women"/>}/>
     <Route path='/Beauty'   element={<Homecategory  banner={HomeMakeupbnanner}  category="Makeup"/>}/>
     <Route path='/Accessories'   element={<Homecategory   banner={AccessoriesBanner}  category="Accessories"/>}/>
     <Route path='/product'    element={<Product/>}>
     <Route path=':ProductId'  element={<Product/>}/>
     </Route>
     <Route path='/cart'  element={<Cart/>}/>
     <Route path='/Aboutus' element={<AboutUs/>}/>
     <Route path='/Login'   element={<Login/>}/>
     <Route path='/Signup'   element={<Signup/>}/>
     <Route path='/Proceed-To-Checkout'   element={<CheckoutPage/>} />
     </Routes>

     <Footer/>
    
     </BrowserRouter>
    </div>
  );
}

export default App;
