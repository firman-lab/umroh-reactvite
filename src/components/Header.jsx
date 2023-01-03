import React from 'react';

function Header() {
    return (
        <main className="w-full relative px-6 pt-16 lg:px-8 bg-[url('src/assets/images/bgs.png')] bg-cover pb-12">
            <div className='flex justify-center items-center pt-20'>
                <div className='flex-1'></div>
                <div className='flex-1 items-start'>
                    <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
                        <div className='relative text-white px-3 py-1 ring-1 ring-gray-400 hover:ring-gray-300 rounded-3xl'>
                            Tentukan Keberangkatan anda sekarang.{' '}
                            <span className='text-orange-600 shadow-white font-semibold'>
                                <a href='#'>
                                    Atur <span aria-hidden='true'>&rarr;</span>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div>
                        <h1 className='flex items-start justify-start font-bold text-white tracking-tight sm:text-4xl'>
                            Wujudkan Perjalanan Ibadah Umroh
                        </h1>
                    </div>
                </div>
            </div>
            {/* <div className='absolute inset-x-0 top-1 -z-10 transform-gpu overflow-hidden bg-fixed'>
                <img src='src/assets/images/bgs.png' alt='bg' />
            </div> */}
        </main>
    );
}

export default Header;
