import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from "./controllorers/Navigation";
import React from 'react'
import Show from "./controllorers/ShowEstudiante";
import Create from "./controllorers/CreateEstudiante";
export const backend = {
  host: "http://localhost",
  port: 1337
}

function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/" exact component={Show} />
      <Route path="/create" component={Create} />
      <Route path="/profesores" render={()=>(<div>Lista de Profesores</div>)} />
    </Router>
  );
}

export default App;
