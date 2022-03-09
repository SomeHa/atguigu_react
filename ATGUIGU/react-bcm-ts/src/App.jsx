import React from 'react'
import Body from './pages/Body'
import { Layout } from 'antd';
import './App.css'
import Footer from './pages/Footer';
import Header from './pages/Header';
import Nav from './pages/Nav';

export default function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Nav/>
      <Layout className="site-layout">
          <Header />
          <Body ></Body>
          <Footer/>
      </Layout>
    </Layout>
  )
}
