import Image from "next/image"

export default function Details() {
    return (
        <div className="max-w-7xl mx-auto py-8 min-h-screen">
            {/* I will add details about the villa here.
            <li>1. Villa floor plans</li>
            <li> 2. Villa images</li>
            <li> 3. Booking a tour - optional</li>
            <li>  4. Video - optional</li>
            <li>  5. Contact form - required</li> */}

            <div className="text-2xl font-semibold mb-8">
                Unique features
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                    <Image
                        src={"/parking.jpg"}
                        alt="test"
                        width={700}
                        height={700}
                        className="rounded"
                    />
                    <div className="flex flex-col gap-2">
                        <div className="text-xl">Car parking</div>
                        <div>Comfortable parking blah blah blah</div>
                    </div>

                </div>
                <div className="flex flex-row-reverse justify-between">
                    <Image
                        src={"/parking.jpg"}
                        alt="test"
                        width={700}
                        height={700}
                        className="rounded"
                    />
                    <div className="flex flex-col gap-2">
                        <div className="text-xl">Ample living space</div>
                        <div>3bhk with 2floors and something something</div>
                    </div>

                </div>
                <div className="flex gap-8">
                    <Image
                        src={"/parking.jpg"}
                        alt="test"
                        width={700}
                        height={700}
                        className="rounded"
                    />
                    <div className="flex flex-col gap-2">
                        <div className="text-xl">Something something</div>
                        <div>3bhk with 2floors and something something</div>
                    </div>

                </div>
            </div>
        </div>
    )
}