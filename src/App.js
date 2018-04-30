import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Import components
import MainNav from './Components/MainNav';
import Container from './Components/Container';

class App extends Component {

  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <MainNav />
          <Route exact path="/" render = { () => <Redirect to="/search"/> } />
          <Switch>
            <Route path="/search/:keyword?" component={Container} />
            <Route path="/:keyword" component={Container} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
