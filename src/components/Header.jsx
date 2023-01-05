import React from 'react';

function Header() {
    return (
        <main className="relative pt-16 bg-[url('/images/bgs.png')] bg-cover pb-16 xl:pb-24 xl:pt-24 md:px-12">
            <div className='flex flex-auto justify-center items-center'>
                <div className='px-5'>
                    <img
                        className='h-10 w-auto'
                        src='/images/ic-trust.png'
                        alt='ic-trust'
                    />
                    <h1 className='pt-4 md:text-left font-bold space-y-3 text-white tracking-tight text-4xl lg:text-6xl'>
                        <span className='block space-x-3'>
                            Percayakan Perjalanan
                        </span>
                        <span className='block space-x-3'>
                            Ibadah Umroh Anda
                        </span>
                        <span className='block space-x-3'>Dengan Kami</span>
                    </h1>
                    <p className='pt-5 text-white md:text-left'>
                        Daftar Sekarang! Dapatkan Harga Hemat untuk paket
                        personal maupun keluarga.
                        <br /> Siapkan diri anda, untuk keberangkatan percayakan
                        pada kami
                    </p>
                    <div className='hidden md:flex pt-8'>
                        <div className='relative text-white px-3 py-2 ring-1 ring-gray-400 hover:ring-orange-300 hover:bg-white hover:text-gray-700 rounded-3xl'>
                            Tentukan Keberangkatan Anda{' '}
                            <span className='text-orange-600 shadow-white font-semibold'>
                                <a href='#'>
                                    Sekarang{' '}
                                    <span aria-hidden='true'>&rarr;</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex md:justify-end md:w-5/12 pt-32'>
                    <img
                        className='h-32 lg:h-40 w-auto'
                        src='/images/testimoni.png'
                        alt=''
                    />
                </div>
            </div>
        </main>
    );
}

export default Header;
