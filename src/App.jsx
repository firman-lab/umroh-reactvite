import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Popover, Transition } from '@headlessui/react';

const navigation = [
    { name: 'Paket Hemat', href: '/' },
    { name: 'Tentang Kami', href: '/' },
    { name: 'Testimoni', href: '/' },
];
function App() {
    return (
        <div className='max-w-7xl'>
            <Popover>
                <section className='relatives'>
                    <nav className='flex items-center justify-between xl:justify-start'>
                        <div className='flex items-center w-full justify-between md:w-auto'>
                            <img alt='logo' src='src/assets/icons/logo.svg' />
                            <Popover.Button className='bg-orange-400 px-2 py-2 rounded-md inline-flex transition-all md:hidden'>
                                <span className='sr-only'>Main Menu</span>
                                <img
                                    src='src/assets/icons/bar.svg'
                                    className='h-4 w-auto'
                                />
                            </Popover.Button>
                        </div>
                        <div className='md:flex w-full lg:pl-10 lg:justify-between justify-end items-center space-x-8 hidden'>
                            <ul className='flex flex-row justify-between'>
                                {navigation.map((item) => (
                                    <li className='font-medium px-3'>
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                            <button className='bg-orange-600 px-3 py-2 rounded-lg text-white'>
                                Get In Touch
                            </button>
                        </div>
                        <Transition 
                        as={Fragment}
                        enter='duration-150 ease-out'
                        enterForm='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='duration-100 ease-in'
                        leaveFrom='opacity-100 scale-100'
                        leavetTo='opacity-0 scale-95'
                        >
                            <Popover.Panel focus className='md:hidden'> 
                                Makan
                            </Popover.Panel>
                        </Transition>
                    </nav>
                </section>
            </Popover>
        </div>
    );
}

export default App;
