// import Image from "next/image"

import { Hammer, HomeIcon, MapPin } from "lucide-react";


export default function Body() {
    return (
        <div className="flex relative gap-8  min-h-screen items-center bg-background">
            {/* <div className="max-w-4xl relative h-[700px]">
                <Image
                    alt="/exterior.jpg"
                    src="/exterior.jpg"
                    width={700}
                    height={475}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto",
                        position: "absolute"
                    }}
                />
            </div> */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
            <div className="flex flex-col gap-16 max-w-4xl mx-auto justify-center items-start">
                <div className="flex flex-col gap-4">
                    <h1 className="lg:text-6xl text-3xl leading-[32px] font-bold max-w-3xl text-fifth ">
                        Find your luxury home in god&apos;s own country
                    </h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <MapPin className="w-5 h-5 text-gray-500" />
                            <p>near Lulu mall</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Hammer className="w-5 h-5 text-gray-500" />
                            <p>20+ amenities</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <HomeIcon className="w-5 h-5 text-gray-500" />
                            <p>30+ plots available</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm text-secondary">
                        Under construction
                    </p>
                    <button className="bg-base px-8 py-4 rounded-sm w-[300px]">
                        Contact us
                    </button>
                </div>
                {/* ottamalikaiqbal@gmail.com */}
            </div>
        </div >
    )
}