import React from "react";
import Link from "next/link";
import Image from "next/image";



const Languages = () => {
    return(
        <section className="languages px-[15px] xl:px-0 py-20 bg-[#D9EEE1]">
            <div className="container max-w-6xl mx-auto">
                <div className="content_wrapper flex">
                    <div className="ref__links mr-20">
                        <h2 className="text-[100px] text-center font-bold uppercase">html</h2>
                        <p className="text-[19px] text-center text-black font-normal">The language for building web pages</p>

                        <div className="btn____link flex my-7">

                            <div className="button___link">
                                <Link href="/" className="text-[18px] text-white font-normal bg-[#15a570] inline-flex items-center justify-center w-[200px] h-[43px] border border-[#04AA6D] rounded-full hover:bg-[#109766] mr-5">
                                    Learn HTML
                                </Link>
                            </div>

                            <div className="button___link">
                                <Link href="/" className="text-[18px] text-black font-normal bg-[#FFF4A3] inline-flex items-center justify-center w-[200px] h-[43px] border border-[#FFF4A3] rounded-full hover:bg-[#f8eb8a]">
                                    Watch tutorial
                                </Link>
                            </div>
                        </div>

                        <div className="btn____links flex">
                            <div className="button___link">
                                <Link href="/" className="text-[18px] text-white font-normal bg-[#282A35] inline-flex items-center justify-center w-[200px] h-[43px] border border-[#282A35] rounded-full hover:bg-[#1d1f25] mr-5">
                                    HTML Reference
                                </Link>
                            </div>

                            <div className="button___link">
                                <Link href="/" className="text-[18px] text-black font-normal bg-[#FFC0C7] inline-flex items-center justify-center w-[200px] h-[43px] border border-[#FFC0C7] rounded-full hover:bg-[#fab3bb]">
                                    Get Certified
                                </Link>
                            </div> 
                        </div>  
                    </div>

                    <div className="html-example p-[16px] bg-[#E7E9EB] max-w-[615px] rounded-md">
                        <h3 className="text-[24px] text-black font-semibold uppercase">html example:</h3>

                        <div className="example bg-white w-[580px] p-[10px] h-[300px] my-4 border-l-[6px] border-[#04AA6D]">
                            <div className=""><span>&lt;</span>!DOCTYPE html<span>&gt;</span></div>
                            <div className=""><span>&lt;</span>html<span>&gt;</span></div>
                            <div className=""><span>&lt;</span>body<span>&gt;</span></div>
                            <div className=""><span>&lt;title&gt;</span>HTML Tutorial<span>&lt;title&gt;</span></div>


                            <div className="mt-5"><span>&lt;h1&gt;</span>This is a heading<span>&lt;/h1&gt;</span></div>
                            <div className="mb-5"><span>&lt;p&gt;</span>This is a paragraph.<span> &lt;p&gt;</span></div>

                            
                            <div className=""><span>&lt;</span>body<span>&gt;</span></div>
                            <div className=""><span>&lt;</span>html<span>&gt;</span></div>
                        </div>

                        <div className="button___link bg-[#04AA6D] inline-flex items-center justify-center w-[200px] h-[43px] border border-[#04AA6D] rounded-full hover:bg-[#109766] mr-5">
                            <Link href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default_default" className="text-[18px] text-white font-normal">
                                Try it Yourself
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )   
}

export default Languages