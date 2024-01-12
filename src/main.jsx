import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import theme from './styles/theme'

import {Prato} from './pages/Prato';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider  theme = {theme} >
      <GlobalStyle/>
    <Prato />
    </ThemeProvider>
  </React.StrictMode>,
)
