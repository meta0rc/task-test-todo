import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import { App } from './app'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from './hooks/context/providerApi'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
