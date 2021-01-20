import React from 'react'
import MovieList from "./components/MovieList/Container"
import Feed from "./components/Feed/Container"
import {BrowserRouter, Switch , Route } from "react-router-dom"



function App() {
  return(
    <>
        <BrowserRouter>
          <Switch>
            <Route path = "/Feed" component={Feed} >
              </Route>
            <Route exact path="/" component={MovieList}>
              </Route>
          </Switch>
        </BrowserRouter>
    </>

  );
}

export default App;