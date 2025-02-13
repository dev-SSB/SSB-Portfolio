import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context from './contexts/Context.jsx'
import { HashRouter } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <Context>
    <HashRouter>
      <App />
    </HashRouter>
  </Context>
)
