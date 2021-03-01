import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
     </BrowserRouter>
    </>
  );
}

export default App;
