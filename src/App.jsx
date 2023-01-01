import React, { Fragment } from 'react';
import './App.css';
import { Popover, Transition } from '@headlessui/react';

const navigation = [
    { name: 'Paket Hemat', href: '/' },
    { name: 'Tentang Kami', href: '/' },
    { name: 'Testimoni', href: '/' },
];
function App() {
    return (
        <div className='max-w-7xl font-sans'>
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
                                    <li className='font-semibold px-3 text-amber-600 hover:text-amber-500'>
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                            <button className='bg-orange-600 px-3 py-2 rounded-lg text-white font-semibold hover:bg-orange-500'>
                                Get In Touch
                            </button>
                        </div>
                    </nav>
                    <Transition
                        as={Fragment}
                        enter='duration-150 ease-out'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='duration-100 ease-in'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                    >
                        <Popover.Panel
                            focus
                            className='absolute inset-0 top-0 z-10 origin-top-right transform transition'
                        >
                            <div className='bg-orange-100 shadow-md ring-1 ring-black ring-opacity-5 pt-3 pb-2 px-3'>
                                <div className='flex items-center justify-between px-5 pt-4'>
                                    <img
                                        src='src/assets/icons/logo.svg'
                                        alt='logo'
                                        className='h-8 w-auto'
                                    />
                                    <div className='mr-2'>
                                        <Popover.Button className='inline-flex items-center justify-center rounded-md bg-orange-400'>
                                            <img
                                                src='src/assets/icons/close.svg'
                                                alt='close-ic'
                                                className='h-7 w-auto p-1'
                                            />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </section>
            </Popover>
        </div>
    );
}

export default App;
