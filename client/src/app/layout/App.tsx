import { Container, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import createTheme from "@mui/system/createTheme";
import { useState } from "react";
import { Route } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductCard from "../../features/catalog/ProductCard";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import Header from "./Header";

const App = ()  =>{

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({

    palette: 
    { 
      
      mode: paletteType,
      background: 
      {
        default:paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    
    }})
  
    function switchDarkMode()
    {
        setDarkMode(!darkMode);

    }

  return 
  (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Header darkMode={darkMode} switchDarkMode={switchDarkMode}/>

      <Container>
      <Route exact path="/" component={HomePage} />
          <Route exact path="/catalog" component={Catalog} />
          <Route path="/catalog/:id" component={ProductDetails} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
      
      </Container>

    </ThemeProvider>
  );
};

export default App;

