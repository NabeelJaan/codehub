import React from "react";
import Link from "next/link";


const Footer = () => {
    return(

        <footer>
            <div className="footer py-20 bg-black relative mt-40">
                <div className="container max-w-8xl mx-auto">
                    <div className="content-wtapper">

                        <h3 className="text-[32px] text-white font-normal">CodeHub is powered by The Times of Pakistan.</h3>

                        <div className="nav-menu flex gap-36">
                            <div className="menu">
                                <ul className="text-[21px] text-white/80 font-normal mt-10"> 
                                    <li className="text-[18px] text-[#ff7a18] font-bold mb-3">DIGITALOCEAN</li>

                                    <Link href="/" className="text-[21px] text-white/80 font-normal mt-1 block hover:text-white">
                                        DigitalOcean
                                    </Link>

                                    <Link href="/" className="text-[21px] text-white/80 font-normal mt-1 block hover:text-white">
                                        DigitalOcean Community
                                    </Link>

                                    <Link href="/" className="text-[21px] text-white/80 font-normal mt-1 block hover:text-white">
                                        About DigitalOcean
                                    </Link>

                                    <Link href="/" className="text-[21px] text-white/80 font-normal mt-1 block hover:text-white">
                                        Legal
                                    </Link>

                                    <Link href="/" className="text-[21px] text-white/80 font-normal mt-1 block hover:text-white">
                                        Free Credit Offer
                                    </Link>
                                </ul>
                            </div>

                            <div className="menu">
                                <ul className="text-[21px] text-white/80 font-normal mt-10"> 
                                    <li className="text-[18px] text-[#ff7a18] font-bold mb-3">CSS-TRICKS</li>
                                    <Link href="/" className="text-[21px] text-white/80 font-normal mt-1 block hover:text-white">
                                        Email
                                    </Link>

                                    <Link href="/" className="text-[21px] text-white/80 font-normal mt-1 block hover:text-white">
                                        Guest Writing
                                    </Link>

                                    <Link href="/" className="text-[21px] text-white/80 font-normal mt-1 block hover:text-white">
                                        Book
                                    </Link>

                                    <Link href="/" className="text-[21px] text-white/80 font-normal mt-1 block hover:text-white">
                                        Advertising
                                    </Link>
                                </ul>
                            </div>

                            <div className="menu">
                                <ul className="text-[21px] text-white/80 font-normal mt-10"> 
                                    <li className="text-[18px] text-[#ff7a18] font-bold mb-3">FOLLOW</li>
                                    <Link href="/" className="text-[21px] text-white/80 font-normal mt-1 block hover:text-white">
                                        Mastodon
                                    </Link>

                                    <Link href="/" className="text-[21px] text-white/80 font-normal mt-1 block hover:text-white">
                                        Instagram
                                    </Link>

                                    <Link href="/" className="text-[21px] text-white/80 font-normal mt-1 block hover:text-white">
                                        Twitter
                                    </Link>

                                    <Link href="/" className="text-[21px] text-white/80 font-normal mt-1 block hover:text-white">
                                        YouTube
                                    </Link>
                                </ul>
                            </div>

                            <div className="menu">
                                <ul className="text-[21px] text-white/80 font-normal mt-10"> 
                                    <Link href="/" className="text-[21px] text-white/80 font-normal mt-1 block hover:text-white">
                                        CodePen
                                    </Link>

                                    <Link href="/" className="text-[21px] text-white/80 font-normal mt-1 block hover:text-white">
                                        iTunes
                                    </Link>

                                    <Link href="/" className="text-[21px] text-white/80 font-normal mt-1 block hover:text-white">
                                        RSS
                                    </Link>
                                </ul>
                            </div>
                            
                        </div>
                        
                        <div className="keep-sub p-[26px] bg-[#434343] absolute top-[-35px] right-[200px] w-[840px] rounded-b-md rounded-l-md rounded-t-none">
                            <h3 className="text-[26px] text-[#ff7a18] font-bold mb-1">KEEP UP TO DATE ON WEB DEV</h3>
                            <h6 className="text-[18px] text-white font-normal">with our hand-crafted newsletter</h6>

                            <div className="flex items-center justify-left mt-2">
                                <div className="flex">
                                    <input
                                        type="email"
                                        className="block px-4 py-2 w-[560px] mr-5 rounded-sm h-[47px] text-black bg-white border-r-full focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
                                        placeholder=""
                                    />

                                    <div className="button___link">
                                        <Link href="/" className="text-[18px] text-black font-normal bg-white inline-flex items-center justify-center w-[200px] h-[47px] border border-[#fff] rounded-sm">
                                            Get Certified
                                        </Link>
                                    </div>
                                
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            </div>  
        </footer>
        
    )   
}

export default Footer