import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './redux/reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));

const Application = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/markin" exact={true} render={() => <App brand="markin" />} />
        <Route path="/lari" exact={true} render={() => <App brand="lari" />} />  
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  Application,
  document.querySelector('#root')
);
