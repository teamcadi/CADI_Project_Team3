import React from 'react'
import MovieList from "./components/MovieList/Container"
import Feed from "./components/Feed/Container"
import MyPage from "./components/Mypage/Container"
import Test from "./components/Test/TestContainer"
import {BrowserRouter, Switch , Route } from "react-router-dom"



function App() {
  return(
    <>
        <BrowserRouter>
          <Switch>
            <Route path = "/feed" component={Feed} >
              </Route>
            <Route path = "/myPage" component={MyPage}></Route>
            <Route path = "/test" component  ={Test}></Route>
            <Route exact path="/" component={MovieList}>
              </Route>
            
          </Switch>
        </BrowserRouter>
    </>

  );
}

export default App;