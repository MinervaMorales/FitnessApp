import React from 'react';
import logo from './logo.svg';
import './App.css';
import Exercises from './pages/Exercises'
import ExerciseNewContainer from './pages/ExerciseNewContainer'
import NotFound from './pages/NotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () =>(
    <BrowserRouter>
      <Switch>
        <Route exact path="/exercise" component={ Exercises } />
        <Route exact path="/exercise/new" component={ ExerciseNewContainer } />
        <Route component={ NotFound } />
      </Switch>
      
    </BrowserRouter>
);


export default App;
