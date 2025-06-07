import Tile from "../components/Tile/Tile";
import cardData from "@/app/data/person.json";


export default function About() {
  return (
    <div className="min-h-screen justify-center flex flex-col mx-m gap-xl">
      <div id="contactHeader" className="flex flex-col gap-s">
        <h1 className="font-bold text-background text-5xl">About Us</h1>
        <p className="text-base">Experienced builders and architects focusing on your needs</p>
      </div>

      <div className="flex gap-0 scrollbar-none">
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-s"> */}
        {cardData.map((card) => (
          <Tile
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
