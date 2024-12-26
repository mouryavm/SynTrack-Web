import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import './index.css';



const theme = createTheme({
  typography: {
    fontFamily: 'IBM Plex Sans, Arial, sans-serif', // Set IBM Plex Sans globally
  },
  palette: {
    primary: {
      main: '#2F887C', // Primary color for buttons and other elements
      contrastText: '#fff', // Contrast text color for better readability
    },
    secondary: {
      main: '#6c757d', // Secondary color for other elements
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);