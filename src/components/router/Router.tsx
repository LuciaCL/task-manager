import { Route, Switch } from "react-router-dom"

import React from "react"
import TaskDetail from "../taskDetail/TaskDetail"
import TaskIndex from "../taskIndex/TaskIndex"

const Router = () => (

  <Switch>
    <Route path="/" exact component={TaskIndex} />
    <Route path="/taskDetail" component={TaskDetail} />
  </Switch>
)

export default Router
