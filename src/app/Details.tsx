// import Image from "next/image"
import Card from "./Card";
import cardData from "@/app/data/cards.json";

export default function Details() {
  return (
    <div className="min-h-screen justify-center flex flex-col mx-m gap-xl">

      <div id="contactHeader" className="flex flex-col gap-s">
        <h1 className="font-bold text-background text-5xl">Amenities</h1>
        <p className="text-base">
          Basic amentities for all your needs
        </p>
      </div>


      <div className="flex gap-l overflow-x-auto scrollbar-none">
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-s"> */}
        {cardData.map((card) => (
          <Card
            key={card.heading}
            image={card.image}
            heading={card.heading}
            description={card.description}
          />
        ))}
      </div>

      
    </div>
  );
}
