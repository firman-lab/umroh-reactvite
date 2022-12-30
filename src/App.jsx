import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='w-full font-inter'>
            <section className='container'>
                <nav className='flex flex-row justify-evenly'>
                    <img src='src/assets/icons/logo.svg' />
                    <ul className='text-lg font-semibold flex-auto'>
                        <li>Paket Hemat</li>
                        <li>Paket Hemat</li>
                    </ul>
                </nav>
            </section>
        </div>
    );
}

export default App;
