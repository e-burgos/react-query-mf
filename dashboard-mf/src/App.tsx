import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import '../assets/styles/tailwind.css';
import '../assets/styles/index.css';

// Views
import Dashboard from './views/Dashboard';
import Tables from './views/Tables';
import OtherPages from './views/OtherPages';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/admin/dashboard' exact component={Dashboard} />
      <Route path='/admin/tables' exact component={Tables} />
      <Route path='/admin/otherpages' exact component={OtherPages} />
      <Redirect from='*' to='/admin/dashboard' /> 
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);