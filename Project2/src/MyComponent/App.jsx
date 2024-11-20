import Nav from "./Nav";
import Slider from "./Slider";
import Footer from "./Footer";
import Form from "./Form";
import Text from "./Text";
import Try from "./Try";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
     <Router>
      <Nav/>
      <Routes>
        <Route path="/Text" element={<Text />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Slider" element={<Slider />} />
        <Route path="/Try" element={<Try />} />
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
