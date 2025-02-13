// import Image from "next/image"
import Card from "./Card"
import cardData from "@/app/data/cards.json"

export default function Details() {
    return (
        <div className="max-w-7xl md:mx-auto mx-8 py-8 min-h-screen">
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
        </div>
    )
}