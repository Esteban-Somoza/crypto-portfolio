import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import TokenData from "./context/TokenEditData";

ReactDOM.createRoot(document.getElementById('root')).render(
    <TokenData>
      <App />
    </TokenData>
)
