import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className='max-w-7xl font-sans'>
            <Navbar />
            <Header />
        </div>
    );
}

export default App;
