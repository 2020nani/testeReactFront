/*
    Dados da pagina
   * Nome : Code7
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 27/01/2021 - 02/02/2021

*/

import React from 'react';
import Header from '../../components/Header'
import Maps from '../../components/Maps'
import { Container } from '../Home/styles'

export default function Home() {


  return (

    <Container>
      <Header />
      <Maps />
    </Container>

  );

}
