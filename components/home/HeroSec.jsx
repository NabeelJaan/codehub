import React from "react";

const HeroSec = () => {
    return(
        <section className="heroSec bg-[#282A35] pt-16 pb-16 px-5 xl:px-0">

            <div className="container mx-auto text-center py-4">
                <div className="">
                    <h1 className="text-4xl md:text-[70px] lg:text-7xl text-white font-roboto font-black mb-10">Learn to code by Practice</h1>
                    <p className="text-white">With the world's largest web developer site.</p>
                </div>

                <div className="flex items-center">
                    <div className="flex space-x-1">
                        <input
                            type="text"
                            className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Search..."
                        />
                        <button className="px-4 text-white bg-purple-600 rounded-full ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSec