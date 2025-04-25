// import Image from "next/image"
import Card from "./Card"
import cardData from "@/app/data/cards.json"

export default function Details() {
    return (
        <div className="bg-primary">
            <div className="max-w-4xl mx-auto py-l min-h-screen flex flex-col gap-xl">
                {/* I will add details about the villa here.
            <li>1. Villa floor plans</li>
            <li> 2. Villa images</li>
            <li> 3. Booking a tour - optional</li>
            <li>  4. Video - optional</li>
            <li>  5. Contact form - required</li> */}

                <div className="text-h4 font-semibold text-gray1">
                    Amenities available
                </div>
                <div className="flex flex-col gap-xxl">
                    {
                        cardData.map((card) => (
                            <Card
                                key={card.heading}
                                image={card.image}
                                heading={card.heading}
                                description={card.description} />
                        ))
                    }
                </div>

                <div className="flex w-full justify-center text-background">
                    and many more...
                </div>
            </div>
        </div>
    )
}