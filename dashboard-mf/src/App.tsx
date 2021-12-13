import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/styles/tailwind.css';
import '../assets/styles/index.css';

// Create a client
const queryClient = new QueryClient();

// Views
import Dashboard from './views/Dashboard';
import Tables from './views/Tables';
import OtherPages from './views/OtherPages';

console.log(process.env.REACT_APP_RAPIDAPI_KEY !== undefined ? 'Coingecko/Rapidapi Online' : "Coingecko/Rapidapi OFF");

ReactDOM.render(
  <QueryClientProvider client={queryClient} contextSharing={true}>
    <BrowserRouter>
      <Switch>
        <Route path='/admin/dashboard' exact component={Dashboard} />
        <Route path='/admin/tables' exact component={Tables} />
        <Route path='/admin/otherpages' exact component={OtherPages} />
        <Redirect from='*' to='/admin/dashboard' />
      </Switch>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById('root'),
);
