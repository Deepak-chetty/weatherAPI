import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Infobox from './infobox.jsx'
import Weatherapp from './weatherapp.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Weatherapp/>
  </React.StrictMode>,
)
