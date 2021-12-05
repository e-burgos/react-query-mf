import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import '../assets/styles/tailwind.css';
import '../assets/styles/index.css';

// Views
import Index from './views/Index';

// Remote Views
import LandingPage from 'landing_mf/LandingPage';
import CompanyPage from 'landing_mf/CompanyPage';
import Dashboard from 'dashboard_mf/Dashboard';
import Tables from 'dashboard_mf/Tables';
import OtherPages from 'dashboard_mf/OtherPages';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add mf routes with layouts */}
      <Route path="/admin/dashboard" component={Dashboard} />
      <Route path="/admin/settings" component={Dashboard} />
      <Route path="/admin/tables" component={Tables} />
      <Route path="/admin/otherpages" component={OtherPages} />
      {/* add mf routes without layouts */}
      <Route path="/landing" exact component={LandingPage} />
      <Route path="/landing/company" exact component={CompanyPage} />
      <Route path='/' exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from='*' to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
