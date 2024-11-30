import Nav from "./Nav";
import Slider from "./Slider";
import Footer from "./Footer";
import Form from "./Form";
import Text from "./Text";
import Try from "./Try";
import Hook from "./Hook";
import Conp3 from "./Conp3";
import Sing from "./Sing";
import Comp4 from "./Comp4";
// import Spred from "./Spred";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
     <Router>
      <Nav/>
      <Routes>
        <Route path="/Hooks" element={<Hook />} />
        <Route path="/Text" element={<Text />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Slider" element={<Slider />} />
        <Route path="/Try" element={<Try />} />
        <Route path="/Sing" element={<Sing />} />
        <Route path="/Comp4" element={<Comp4 />} />
        {/* <Route path="/Footer" element={<Footer />} /> */}
      </Routes>
      {/* <Slider/>
      <Form/> 
      <Text/>
      <Footer/> */}
      <Footer/>
      </Router>
    </>
  )
}

export default App
