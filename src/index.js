import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeContextProvider } from './Context/darkModeContrext';
import { AuthContextProvider } from './Context/authContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <AuthContextProvider>
     <DarkModeContextProvider>
       <App />
     </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

