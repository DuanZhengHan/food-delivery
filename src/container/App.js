import React from 'react';
import './App.css';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import PageRouter from '../PageRouter/PageRouter';
import CustomerService from '../Components/CustomerService/CustomerService';

const App = () => {
  return (
    <React.Fragment>
        <Header/>
        <PageRouter/>
        <Footer/>
        <CustomerService/>
    </React.Fragment>
  );
}

export default App;
