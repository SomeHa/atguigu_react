import React from 'react';
import { Layout } from 'antd';
import Nav from './pages/Nav';
import Header from './pages/Header';
import Body from './pages/Body';
import Footer from './pages/Footer';
import './App.css'

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Nav/>
      <Layout className="site-layout">
          <Header />
          <Body ></Body>
          <Footer/>
      </Layout>
    </Layout>
  );
}

export default App;
