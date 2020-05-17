import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { theme } from './ui/Theme';
import Header from '../components/ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={() => <div>Home</div>} />
          <Route exact path='/services' component={() => <div>Services</div>} />
          <Route exact path='/custom-software' component={() => <div>Custom Software</div>} />
          <Route exact path='/mobile-apps' component={() => <div>Mobile Apps</div>} />
          <Route exact path='/websites' component={() => <div>Websites</div>} />
          <Route exact path='/information' component={() => <div>Information</div>} />
          <Route exact path='/about-us' component={() => <div>About Us</div>} />
          <Route exact path='/contact-us' component={() => <div>Contact Us</div>} />
          <Route exact path='/estimate' component={() => <div>Estimate</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
