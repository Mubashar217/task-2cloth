import React from 'react'
import Button from '../Button/Button'

export default function Customshirt2() {
    return (
        <div className='container max-w-[1920] mx-auto bg-gray-100 mt-10'>
            <div className='first grid md:grid-cols-2 justify-items-center'>
                <div><img src="/shirtimg.png" alt="pic" className='w-[500px] md:w-[600px] p-10' /></div>
                <div className='content-center'>
                    <h1 className='text-2xl font-bold md:w-70 text-center md:text-start'>Free and easy way to
                        bring your ideas to life</h1>
                    <p className='mt-2 md:w-90 text-center md:text-start'>Lorem ipsum det, cowec tetur duis necgi det, consec t
                        eturlagix adipiscing eliet, cowec tetopak</p>
                    <Button className="bg-green-500 mt-2 hover:bg-green-600 text-white cursor-pointer">Get started</Button>
                </div>
            </div>
            <div className='hidden md:block'>
                <h1 className='text-2xl font-bold text-center mt-5'>T-shirt printing made easy.</h1>
                <p className='text-center'>Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi det, consec eturlagix <br className='hidden md:block' />
                    adipiscing eliet, cowec tetopak</p>
            </div>
            {/* <div className='grid md:grid-cols-2 mt-10'>
                <div className='smcard content-center justify-item-center item-center'>
                    <div>
                        <h1 className='text-2xl font-bold'>Premium quality custom t-shirts</h1>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>Easy to create & customize</h1>
                        <p>Lorem ipsum det, cowec tetur duis necgi det, consec t
                            eturlagix adipiscing eliet</p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>Thousands of free templates</h1>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>Free standard shipping</h1>
                    </div>
                </div>
                <div><img src="laptop.png" alt="img" /></div>
            </div> */}
        </div>
    )
}
