import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import '../assets/styles/tailwind.css';
import '../assets/styles/index.css';

// Views
import LandingPage from './views/LandingPage';
import CompanyPage from './views/CompanyPage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/landing/company" exact component={CompanyPage} />
      <Route path='/' exact component={LandingPage} />
      <Redirect from='*' to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
