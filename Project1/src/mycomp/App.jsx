import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav  from './Nav';
import Containt from './Containt';
import SingIn from './SingIn';
import SingUp from './SingUp';

function App() {

  return (
    <>
    <Router>
      <Nav/>
      <Containt/>
      <Routes>
        <Route path='SingIn' element={<SingIn/>} />
        <Route path='SingUp' element={<SingUp/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
