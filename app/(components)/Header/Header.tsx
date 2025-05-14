'use client';

import Image from 'next/image';
import Button from '../Button/Button';

const Header = () => {
    return (
        <section className="max-w-[1920] mx-auto w-full px-4 sm:px-6 py-12 md:py-10 bg-white flex flex-col-reverse md:flex-row items-center justify-between gap-12">
         
            <div className="w-full md:max-w-xl space-y-6 text-center md:text-left md:ml-30">
                <div className="inline-block bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
                    Create your own
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    Make the most <br className='hidden md:block'/>
                    of o <span className="text-black">printing</span>
                </h1>
                <p className="text-gray-500 text-sm sm:text-base">
                    What’s more, we do it right! A full administration printing experience.
                    Print shirts for yourself or your online business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button className="bg-green-500 hover:bg-green-600 text-white cursor-pointer">Shop Now</Button>
                    <Button variant="outline" className=''>How We Work</Button>
                </div>
                <div className="flex justify-center md:justify-start gap-10 pt-6">
                    <div>
                        <p className="text-xl font-bold">4k+</p>
                        <p className="text-gray-500 text-sm ">Collections</p>
                    </div>
                    <div>
                        <p className="text-xl font-bold">9k+</p>
                        <p className="text-gray-500 text-sm">Items trusted to deliver</p>
                    </div>
                </div>
            </div>

            
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg md:mr-50">
                <Image
                    src="/1.png"
                    alt="Model"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain"
                    priority
                />
            </div>
        </section>
    );
};

export default Header;
