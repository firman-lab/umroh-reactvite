import React from 'react';

function Features(props) {
    return (
        <>
            <section className='max-w-7xl pt-12 pb-12 lg:mx-auto px-12'>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <img
                        className='rounded-3xl object-contain lg:object-cover lg:h-80 w-full'
                        src='/images/hotels.jpg'
                        alt='hotels'
                    />
                    <div className='w-full text-left ml-4 md:pl-2 lg:pl-8'>
                        <p className='text-orange-500 font-medium pt-2'>
                            Exclusive Hotels
                        </p>
                        <h3 className='text-2xl lg:text-3xl font-bold'>
                            Hotel Full Kenyamanan
                        </h3>
                        <p className='text-gray-400 pt-3 text-sm'>
                            Hotel pilihan terbaik untuk menunjang jamaah
                            beristirahat setelah melaksanakan serangkaian ibadah
                            Umroh. View langsung ke Mekkah -
                        </p>
                        <div className='flex flex-auto justify-evenly pt-8'>
                            <div className='p-2'>
                                <img
                                    className='h-10'
                                    src='/images/money.png'
                                    alt='money'
                                />
                                <h5 className='font-semibold text-base pt-3'>
                                    Tanpa Tambahan Biaya
                                </h5>
                                <p className='text-gray-400 text-sm pt-1'>
                                    Anda hanya perlu memilih, tanpa ada biaya
                                    tambahan.
                                </p>
                            </div>
                            <div className='p-2'>
                                <img
                                    className='h-10'
                                    src='/images/custom.png'
                                    alt='money'
                                />
                                <h5 className='font-semibold text-base pt-3'>
                                    Custom Kamar
                                </h5>
                                <p className='text-gray-400 text-sm pt-1'>
                                    Bisa custom lokasi kamar yang diinginkan
                                    sesuai pilihan anda.
                                </p>
                            </div>
                        </div>
                        {/* <a href="#">
        <button>
            
        </button>
    </a> */}
                    </div>
                </div>
            </section>
            <section className='max-w-7xl pt-12 pb-12 lg:mx-auto px-12'>
                <div className='flex flex-col-reverse lg:flex-row justify-between'>
                    <div className='w-full text-left ml-4 md:pl-2 lg:pl-8'>
                        <p className='text-orange-500 font-medium pt-2'>
                            Direct Flight
                        </p>
                        <h3 className='text-2xl lg:text-3xl font-bold'>
                            Penerbangan Langsung
                        </h3>
                        <p className='text-gray-400 pt-3 text-sm'>
                            Penerbangan tanpa transit, langsung Jakarta Madinah
                            / Jakarta Jeddah PP. Dengan Safety Flight yang
                            tinggi dan pelayanan terbaik selama penerbangan.
                        </p>
                        <div className='flex flex-auto justify-evenly pt-8'>
                            <div className='p-2'>
                                <img
                                    className='h-10'
                                    src='/images/money.png'
                                    alt='money'
                                />
                                <h5 className='font-semibold text-base pt-3'>
                                    Up to Bussiness CLass
                                </h5>
                                <p className='text-gray-400 text-sm pt-1'>
                                    Pelayanan Maksimal selama penerbangan.
                                </p>
                            </div>
                            <div className='p-2'>
                                <img
                                    className='h-10'
                                    src='/images/custom.png'
                                    alt='money'
                                />
                                <h5 className='font-semibold text-base pt-3'>
                                    Keamanan Prioritas Tinggi
                                </h5>
                                <p className='text-gray-400 text-sm pt-1'>
                                    Bisa custom lokasi kamar yang diinginkan
                                    sesuai pilihan anda.
                                </p>
                            </div>
                        </div>
                    </div>
                    <img
                        className='rounded-3xl object-contain lg:h-80 w-full'
                        src='/images/batikair.jpg'
                        alt='hotels'
                    />
                </div>
            </section>
        </>
    );
}

export default Features;
