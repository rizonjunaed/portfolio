import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import routes from './config/routes';


const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          {routes.map((route) => (
              <Route
                path={route.path}
                render={props => <route.component {...props} />}
                key={route.path}
                exact={route.exact}
             />
          ))}
        </Switch>
      </BrowserRouter>
  );
}

export default App;