import React from 'react';

function Products() {
    return (
        <section className='pt-12 pb-12 px-12'>
            <div className='flex flex-col justify-center'>
                <div className='text-orange-500 font-medium pb-1'>
                    Mereka yang memenuhi panggilan Allah
                </div>
                <h3 className='font-extrabold text-2xl'>
                    Perjalanan Jamaah Bersama Kami
                </h3>
                <div className='pt-8 flex flex-col md:flex-row justify-center items-center mx-5'>
                    <div className='max-w-sm mx-3 my-3 md:mx-5 rounded-lg border shadow-lg'>
                        <img
                            className='object-cover rounded-t-lg'
                            src='src/assets/images/img1.jpg'
                            alt='travel1'
                        />
                        <div className='p-3 md:p-5 text-sm h-auto lg:h-32 flex items-center'>
                            "Perjalanan yang sangat nyaman bersama Safar Berkah,
                            kami sangat Puas dan bis khusuk beribadah" <br />{' '}
                            -Jamaah Gift "Jadi Baru"-
                        </div>
                    </div>
                    <div className='max-w-sm mx-3 my-3 md:mx-5 rounded-lg border shadow-lg'>
                        <img
                            className='object-cover rounded-t-lg'
                            src='src/assets/images/img1.jpg'
                            alt='travel1'
                        />
                        <div className='p-3 md:p-5 text-sm h-auto lg:h-32 flex items-center'>
                            "Luar Biasa Pengalaman, Sangat puas sekali umroh
                            bersama Safar Berkah dan Umroh+" <br /> -Jamaah "BRI
                            Life"-
                        </div>
                    </div>
                    <div className='max-w-sm mx-3 my-3 md:mx-5 rounded-lg border shadow-lg'>
                        <img
                            className='object-cover rounded-t-lg'
                            src='src/assets/images/img1.jpg'
                            alt='travel1'
                        />
                        <div className='p-3 pb- md:p-5 text-sm h-auto lg:h-32 flex items-center'>
                            "Sangat puas umroh bersama Safar Berkah, buat temen2
                            yang mau umroh, pake jasa umroh ini aja, dijamin
                            Puas!!" <br /> -Jamaah "Omah Kreasi"-
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products;
