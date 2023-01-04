import React from 'react';

function Header() {
    return (
        <main className="w-full relative px-6 pt-16 lg:px-8 bg-[url('src/assets/images/bgs.png')] bg-cover pb-12">
            <div className='flex justify-between items-center pt-12 xl:justify-start xl:items-start'>
                <div className='mx-auto'>
                    <img className='h-10 w-auto' src="src/assets/images/ic-trust.png" alt="ic-trust" />
                    <h1 className='pt-4 md:text-left font-bold space-y-3 text-white tracking-tight text-4xl md:text-6xl'>
                        <span className='block space-x-3'>
                            Percayakan Perjalanan
                        </span>
                        <span className='block space-x-3'>
                            Ibadah Umroh Anda
                        </span>
                        <span className='block space-x-3'>Dengan Kami</span>
                    </h1>
                    <div className='hidden md:flex pt-8'>
                        <div className='relative text-white px-3 py-1 ring-1 ring-gray-400 hover:ring-gray-300 rounded-3xl'>
                            Tentukan Keberangkatan anda sekarang.{' '}
                            <span className='text-orange-600 shadow-white font-semibold'>
                                <a href='#'>
                                    Atur <span aria-hidden='true'>&rarr;</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex md:justify-end md:w-5/12 pt-32'>
                    <img className='h-32 w-auto' src="src/assets/images/testimoni.png" alt="" />
                </div>
            </div>
        </main>
    );
}

export default Header;
