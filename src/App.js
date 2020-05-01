import React from 'react';
import Register from './containers/Register/Register'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Success from './components/success'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Register} exact/>
        <Route path="/register" component={Register} exact/>
        <Route path="/success" component={Success} exact/>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
