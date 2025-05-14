import React from "react";

export default function Customshirt() {
    return (
        <div className="customshirt mt-14 max-w-[1920px] mx-auto px-4 md:px-10 md:w-290">
            <div className="text-center">
                <p className="text-2xl md:text-3xl font-semibold">
                    How to create custom shirts
                </p>
                <p className="text-md md:text-lg mt-2 text-gray-600">
                    Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix
                    adipiscing eliet,
                    <br className="hidden md:block" />
                    cowec tetopak ec tetur duis necgi
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center mt-10 gap-6 md:gap-2">
                <img
                    src="shirt1.png"
                    alt="shirt1"
                    className="w-[500px] md:w-[400px] order-2 md:order-1"
                />

                <div className="order-1 md:order-2 flex items-center justify-center h-12 w-12 bg-white shadow-xl rounded-full text-xl font-bold">
                    1
                </div>

                <div className="order-3 text-center md:text-left">
                    <p className="text-xl md:text-2xl font-bold">Add your shirt design</p>
                    <p className="text-sm md:text-base text-gray-600 mt-2">
                        Lorem ipsum det, cowec tetur duis nec fringi det,
                        <br className="hidden md:block" />
                        consec t eturlagix adipiscing eliet, cowec tetopak nec{" "}
                        <br className="hidden md:block" />
                        fringi det adipiscing
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center mt-10 gap-6 md:gap-2">
                <div className="order-3 md:order-1 text-center md:text-left">
                    <p className="text-xl md:text-2xl font-bold">
                        Custom artwork & review
                    </p>
                    <p className="text-sm md:text-base text-gray-600 mt-2">
                        Lorem ipsum det, cowec tetur duis nec fringi det,
                        <br className="hidden md:block" />
                        consec t eturlagix adipiscing eliet, cowec tetopak nec{" "}
                        <br className="hidden md:block" />
                        fringi det adipiscing
                    </p>
                </div>

                <div className="order-1 md:order-2 flex items-center justify-center h-12 w-12 bg-white shadow-xl rounded-full text-xl font-bold ">
                    2
                </div>

                <img
                    src="shirt1.png"
                    alt="shirt2"
                    className="w-[500px] md:w-[400px] order-2 md:order-3"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center mt-10 gap-6 md:gap-2">
                <img
                    src="shirt1.png"
                    alt="shirt3"
                    className="w-[500px] md:w-[400px] order-2 md:order-1"
                />

                <div className="order-1 md:order-2 flex items-center justify-center h-12 w-12 bg-white shadow-xl rounded-full text-xl font-bold">
                    3
                </div>

                <div className="order-3 text-center md:text-left">
                    <p className="text-xl md:text-2xl font-bold">Finalize & Order</p>
                    <p className="text-sm md:text-base text-gray-600 mt-2">
                        Lorem ipsum det, cowec tetur duis nec fringi det,
                        <br className="hidden md:block" />
                        consec t eturlagix adipiscing eliet, cowec tetopak nec{" "}
                        <br className="hidden md:block" />
                        fringi det adipiscing
                    </p>
                </div>
            </div>
        </div>
    );
}
