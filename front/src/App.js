import React from 'react'
import MovieList from "./components/MovieList/Container"
import Feed from "./components/Feed/Container"
import MyPage from "./components/Mypage/Container"
import Account from "./components/Account/Container"
import {BrowserRouter, Switch , Route } from "react-router-dom"



function App() {
  return(
    <>
        <BrowserRouter>
          <Switch>
            <Route path = "/feed" component={Feed} >
              </Route>
            <Route path = "/myPage" component={MyPage}></Route>
            <Route path ="/account" component = {Account}></Route>
            <Route exact path="/" component={MovieList}>
              </Route>
            
          </Switch>
        </BrowserRouter>
    </>

  );
}

export default App;