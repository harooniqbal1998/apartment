// import Image from "next/image"


import { Hammer, HomeIcon, MapPin } from "lucide-react";

import Link from "next/link";


export default function Body() {



    return (
        <div className="flex min-h-screen items-center bg-background ">

            <div className="flex flex-col gap-xxl max-w-4xl mx-auto justify-center items-center">
                {/* <video width="100%" height="100%" loop>
                    <source src="/interior.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}

                <div className="flex flex-col gap-ml items-center">
                    <h1 className="text-6xl leading-[120%] font-bold max-w-3xl text-center mx-m">
                        Find your luxury home in god&apos;s own country
                    </h1>
                    <div className="flex flex-col md:flex-row gap-m md:gap-xl">
                        <div className="flex gap-s items-center">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <p>near Lulu mall</p>
                            {/* Would be cool to add a map link here */}
                        </div>
                        <div className="flex gap-s items-center">
                            <Hammer className="w-4 h-4 text-gray-500" />
                            <p>20+ amenities</p>
                            {/* Link to amenities section */}
                        </div>
                        <div className="flex gap-s items-center">
                            <HomeIcon className="w-4 h-4 text-gray-500" />
                            <p>30+ plots available</p>
                            {/* Link to the plot map */}
                        </div>
                    </div>
                </div>

                <div className=" flex flex-col gap-s items-center">

                    <Link href="/#contact" className="bg-primary mx-4 md:mx-8 py-4 rounded-lg text-base text-background w-[300px] text-center hover:rounded-none hover:underline underline-offset-4" scroll={true} replace={false}>Contact us</Link>
                    <div className="text-small text-gray4 text-secondary">
                        Currently under construction
                    </div>
                </div>
                {/* ottamalikaiqbal@gmail.com */}
            </div>

        </div >
    )
}