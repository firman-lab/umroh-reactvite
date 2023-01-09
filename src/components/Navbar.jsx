import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

const navigation = [
    { name: 'Paket Hemat', href: '/' },
    { name: 'Tentang Kami', href: '/' },
    { name: 'Testimoni', href: '/' },
];

function Navbar() {
    return (
        <Popover>
            {/* <section className='fixed z-10 relatives mx-4 my-4 px-4 bg-white'> */}
            <nav className='fixed z-10 py-4 px-4 flex items-center justify-between xl:justify-start bg-white/90 backdrop-blur-md w-full shadow-md'>
                <div className='flex items-center w-full justify-between md:w-auto'>
                    <img
                        className='h-6 w-auto md:h-8'
                        alt='logo'
                        src='/icons/logo.svg'
                    />
                    <Popover.Button className='bg-orange-400 px-2 py-2 rounded-md inline-flex transition-all md:hidden'>
                        <span className='sr-only'>Main Menu</span>
                        <img src='/icons/bar.svg' className='h-3 w-auto' />
                    </Popover.Button>
                </div>
                <div className='md:flex w-full lg:pl-10 lg:justify-between justify-end items-center space-x-8 hidden'>
                    <div className='flex flex-row justify-between'>
                        {navigation.map((item) => (
                            <a className='font-semibold px-3 text-amber-600 hover:text-amber-500'>
                                {item.name}
                            </a>
                        ))}
                    </div>
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
                    <div className='bg-white shadow-md ring-1 rounded-b-xl ring-black ring-opacity-5 pt-3 pb-3 px-3'>
                        <div className='flex items-center justify-between px-5 pt-4'>
                            <img
                                src='/icons/logo.svg'
                                alt='logo'
                                className='h-7 w-auto'
                            />
                            <div className='mr-2'>
                                <Popover.Button className='inline-flex items-center justify-center rounded-md bg-orange-400'>
                                    <img
                                        src='/icons/close.svg'
                                        alt='close-ic'
                                        className='h-7 w-auto p-1'
                                    />
                                </Popover.Button>
                            </div>
                        </div>
                        <hr className='my-4 mx-3 h-0.5 bg-orange-200 rounded border-0 md:my-10 ' />
                        <div className='space-y-\ px-2 flex flex-col justify-start items-start'>
                            {navigation.map((item) => (
                                <a className='font-semibold py-2 px-3 text-orange-600 hover:text-orange-600 hover:bg-orange-200 hover:rounded-lg'>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
            {/* </section> */}
        </Popover>
    );
}

export default Navbar;
