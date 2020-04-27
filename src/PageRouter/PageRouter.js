import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Restaurant from "../Pages/Restaurant/Restaurant";
import CheckOut from "../Pages/CheckOut/CheckOut";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/restaurant/:id' component={Restaurant}/>
        <Route path='/checkout' component={CheckOut}/>
      </Switch>
    </BrowserRouter>
  );
};

export default PageRouter;
