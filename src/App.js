import React from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Switch } from 'react-router-dom';


class App extends React.Component {
  
  render() {

    return (
        <div>
          <Layout>
            <Switch>
              <PrivateRoute path="/checkout" component={Checkout} />
              <PrivateRoute path="/" component={BurgerBuilder} />
            </Switch>
          </Layout>
        </div>
    );
  }
}

export default App;
