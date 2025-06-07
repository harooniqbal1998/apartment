import Image from "next/image";

type CardInterface = {
  image: string;
  heading: string;
  description: string;
};

export default function Card({ image, heading, description }: CardInterface) {
  return (
     <div className="flex flex-col w-full h-[90vh] overflow-hidden">
      <div className="relative flex-1 min-h-[60%] overflow-hidden">
        <Image 
          src={image} 
          alt="test" 
          fill 
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-gray-400 opacity-40 mix-blend-multiply pointer-events-none" />
      </div>
      <div className="flex-1 p-4 flex flex-col ">
        <h2 className="text-xl font-semibold mb-2">
          {heading}
        </h2>
        {description && (
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
