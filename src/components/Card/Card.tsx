import Image from "next/image";
// import { Props } from "next/script"

type CardInterface = {
  image: string;
  heading: string;
};

export default function Card({ image, heading }: CardInterface) {
  return (
    <div className="flex flex-col w-[302px] border border-black box-border">
      <div className="relative w-[300px] h-[300px] overflow-hidden">
        <Image src={image} alt="test" fill className="object-cover" />
        <div className="absolute inset-0 bg-gray-400 opacity-40 mix-blend-multiply pointer-events-none" />
      </div>
      <div className="p-m">{heading}</div>
    </div>
  );
}
