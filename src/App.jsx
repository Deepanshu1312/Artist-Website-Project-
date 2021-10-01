import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Contact from './Pages/Contact';
import Services from './Services';
import About from './About';
import Navbar from './Navbar';
import './index.css';
import Footer from './Footer';
import Login from './Components/Login';
import AddUserComponent from './Components/RegisterCustomer';
import CustomerPanel from './Components/Customer/CustomerPanel'
import AddProduct from './Components/AddProduct';
import Upload from './Components/CustomOrder';
import Testimonial from './Components/Testimonials';
import ArtistPanel from "./Components/Artist/ArtistPanel";
import AdminPanel from "./Components/Admin/AdminPanel";
import RegisterArtist from "./Components/Artist/RegisterArtist";
import DisplayAllCutomer from './Components/Admin/DisplayAllCutomer';
import DisplayAllAdmin from './Components/Admin/DisplayAllAdmin';
import DisplayAllArtist from './Components/Admin/DisplayAllArtist';
import DisplayCustomOrders from './Components/Artist/DisplayCustomOrders';
import CustomOrder from './Components/CustomOrder';
import UpdateUser from './Components/Admin/UpdateUser';
import AddAdmin from './Components/Admin/AddAdmin';
import AddArtist from './Components/Admin/AddArtist';

const App = () => {
   return (
      <>
         <Navbar />
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/service' component={Services} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/reg' component={AddUserComponent} />
            <Route exact path='/CustomerPanel' component={CustomerPanel} />
            <Route exact path='/AddProduct' component={AddProduct} />
            <Route exact path='/upload' component={Upload} />
            <Route exact path='/ArtistPanel' component={ArtistPanel} />
            <Route exact path='/Testimonial' component={Testimonial} />
            <Route exact path='/AdminPanel' component={AdminPanel} />
            <Route exact path='/RegisterArtist' component={RegisterArtist} />
            <Route exact path='/DisplayAllCutomer' component={DisplayAllCutomer} />
            <Route exact path='/DisplayAllArtist' component={DisplayAllArtist} />
            <Route exact path='/DisplayAllAdmin' component={DisplayAllAdmin} />
            <Route exact path='/DisplayCustomOrders' component={DisplayCustomOrders} />
            <Route exact path='/CustomOrder' component={CustomOrder} />
            <Route exact path='/update/:id' component={UpdateUser} />
            <Route exact path='/AddAdmin' component={AddAdmin} />
            <Route exact path='/AddArtist' component={AddArtist} />           
            <Redirect to="/" />
           
         </Switch>
         <Footer/>
      </>
   )
}
export default App