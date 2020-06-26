import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import DinerProvider from './providers/DinerProvider';
import MenuProvider from './providers/MenuProvider';

ReactDOM.render(
  <React.StrictMode>
    <DinerProvider>
      <MenuProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MenuProvider>
    </DinerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);