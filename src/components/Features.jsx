import React from 'react';

function Features(props) {
    return (
        <section className='max-w-7xl pt-12 pb-12 lg:mx-auto px-12'>
            <div className='flex flex-col lg:flex-row justify-between'>
                <img
                    className='rounded-3xl object-cover h-80 w-auto'
                    src='src/assets/images/hotels.jpg'
                    alt='hotels'
                />
                <div className='w-full text-left md:pl-2 lg:pl-8'>
                    <p className='text-orange-500 font-medium pt-2'>
                        Exclusive Hotels
                    </p>
                    <h3 className='pt-2 text-4xl font-bold'>
                        Hotel Full Kenyamanan
                    </h3>
                    <p className='text-gray-500 pt-4 space-y-4'>
                        Hotel pilihan terbaik untuk menunjang jamaah
                        beristirahat <br /> setelah melaksanakan serangkaian
                        ibadah Umroh. View langsung ke Mekkah -
                    </p>
                    <div className='flex flex-auto justify-evenly pt-4'>
                        <div className='p-2'>
                            <img
                                className='h-10'
                                src='src/assets/images/money.png'
                                alt='money'
                            />
                            <h5 className='font-semibold text-lg pt-2'>
                                Tanpa Tambahan Biaya
                            </h5>
                            <p>
                                Anda hanya perlu memilih, tanpa ada biaya
                                tambahan.
                            </p>
                        </div>
                        <div className='p-2'>
                            <img
                                className='h-10'
                                src='src/assets/images/custom.png'
                                alt='money'
                            />
                            <h5 className='font-semibold text-lg pt-2'>
                                Custom Kamar
                            </h5>
                            <p>
                                Bisa custom lokasi kamar yang diinginkan sesuai
                                pilihan anda.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
