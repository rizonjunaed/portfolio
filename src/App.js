import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import routes from './config/routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <div className="inner-body-padding">
        {routes.map((route) => (
          <Route
            path={route.path}
            // eslint-disable-next-line react/jsx-props-no-spreading
            render={(props) => <route.component {...props} />}
            key={route.path}
            exact={route.exact}
          />
        ))}
      </div>
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
