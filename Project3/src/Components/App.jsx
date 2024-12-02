import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav1 from "./Nav1";
import SingUp from "./SingUp";
import SingIn from "./SingIn";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Blog from "./Blog";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Profile from "./Profile";
import Admin from "./Admin";
import NotFound from "./NotFound";

function App() {

  return (
    <>
      <Router>
        <Nav1/>
        <Routes>
          <Route path='SingIn' element={<SingIn/>} />
          <Route path='SingUp' element={<SingUp/>} />
          <Route path='Home' element={<Home/>} />
          <Route path='About' element={<About/>} />
          <Route path='Contact' element={<Contact/>} />
          <Route path='Services' element={<Services/>} />
          <Route path='Blog' element={<Blog/>} />
          <Route path='Cart' element={<Cart/>} />
          <Route path='Checkout' element={<Checkout/>} />
          <Route path='Profile' element={<Profile/>} />
          <Route path='Admin' element={<Admin/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
