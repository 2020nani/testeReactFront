/*
    Dados da pagina
   * Nome : Contele
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 27/01/2021 - 02/02/2021

*/

import React from 'react';
import { Switch} from 'react-router-dom';
import Route from './Route'
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Home from '../pages/Home';


import Profile from '../pages/Profile';
export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/cadastro" component={Signup} />

      <Route path="/home" component={Home} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />



      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}