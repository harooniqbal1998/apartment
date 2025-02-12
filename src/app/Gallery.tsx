"use client"
import Image from "next/image"
import useMasonry from "./hooks/useMasonry"

export default function Gallery() {

    const masonryContainer = useMasonry()

    return (
        <div className="max-w-7xl mx-auto py-8 min-h-screen">
            <div className="pb-8 text-2xl font-semibold">Gallery</div>

            <div
                ref={masonryContainer}
                className="grid items-start gap-4 sm:grid-cols-3 md:gap-6"
            >
                {/* Your masonry items here */}
                <Image
                    src={"/parking.jpg"}
                    alt="test"
                    width={700}
                    height={700}
                    className="rounded"
                />
                <Image
                    src={"/parking.jpg"}
                    alt="test"
                    width={700}
                    height={700}
                    className="rounded"
                />
                <Image
                    src={"/parking.jpg"}
                    alt="test"
                    width={700}
                    height={700}
                    className="rounded"
                />
                <Image
                    src={"/parking.jpg"}
                    alt="test"
                    width={700}
                    height={700}
                    className="rounded"
                />
                <Image
                    src={"/parking.jpg"}
                    alt="test"
                    width={700}
                    height={700}
                    className="rounded"
                />
                <Image
                    src={"/parking.jpg"}
                    alt="test"
                    width={700}
                    height={700}
                    className="rounded"
                />
            </div>

            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 inline-block">
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="/exterior.jpg" fill alt="" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="/exterior.jpg" fill alt="" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="/exterior.jpg" fill alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="/exterior.jpg" fill alt="" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="/exterior.jpg" fill alt="" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="/exterior.jpg" fill alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="/exterior.jpg" fill alt="" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="/exterior.jpg" fill alt="" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="/exterior.jpg" fill alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="/exterior.jpg" fill alt="" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="/exterior.jpg" fill alt="" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="/exterior.jpg" fill alt="" />
                    </div>
                </div>
            </div> */}

        </div>

    )
}