import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './mycomp/App';
// import { BrowserRouter } from 'react-router-dom';
// import {Provider} from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </StrictMode>,
)
