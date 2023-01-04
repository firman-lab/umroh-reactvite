import React from 'react';
import './App.css';
import Features from './components/Features';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Products from './components/Products';
Features;

function App() {
    return (
        <div className='font-poppins'>
            <Navbar />
            <Header />
            <Products />
            <Features />
        </div>
    );
}

export default App;
