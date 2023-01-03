import React from 'react';

function Header() {
    return (
        <main className='relative px-6 pt-32 lg:px-8'>
            <div className='mx-auto'>
                <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
                    <div className='relative px-3 py-1 ring-1 ring-orange-500/20 hover:ring-orange-500/40 rounded-3xl'>
                        Tentukan Keberangkatan anda sekarang.{' '}
                        <span className='text-orange-600 font-semibold'>
                            <a href='#'>
                                Atur <span aria-hidden='true'>&rarr;</span>
                            </a>
                        </span>
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold tracking-tight sm:text-center sm:text-6xl'>Allah Akan permudah jalanmu</h1>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Header;
