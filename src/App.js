'use sctrict'
import React from 'react';
import Header from './components/header/index'
import Home from './components/home'
import Partners from './components/partners'
import './sass/style.scss';



const App = () => (
  <main className="main">
    <Header />
    <Home />
    <Partners />
  </main>
)

export default App;
