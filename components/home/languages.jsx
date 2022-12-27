import React from "react";
import Link from "next/link";



const Languages = () => {
    return(
        <section className="languages">
            <div className="container mx-auto">
                <div className="content_wrapper">
                    <div className="ref__links">
                        <h2 className="text-7xl">html</h2>
                        <p>The language for building web pages</p>
                        <div className="button___link">
                            <Link href="/">
                                Learn HTML
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )   
}

export default Languages