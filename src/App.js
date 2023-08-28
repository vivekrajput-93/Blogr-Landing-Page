import React from 'react'
import Showcase from './components/Showcase'
import './App.css';
import Header from './components/Header';
import Designed from './components/Designed';
import Open from './components/Open';
import Footer from './components/Footer';
import State from './components/State';

const App = () => {
  return (
    <>
    <Header />
    <Showcase />
    <Designed />
    <State />
    <Open />
    <Footer />
    </>
  )
}

export default App
