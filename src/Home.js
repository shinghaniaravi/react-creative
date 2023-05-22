import React from 'react'
import Header from './components/Header';
import Content from './components/Content';
import TabsComponent from './components/Tabslider';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div>
        <Header/>
        <Content/>
        <TabsComponent/>
        <Footer/>
    </div>
  )
}

export default Home