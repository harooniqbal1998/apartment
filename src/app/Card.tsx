import Image from "next/image"
// import { Props } from "next/script"

type CardInterface = {
    image: string;
    heading: string;
    description: string
}

export default function Card({
    image,
    heading,
    description,
}: CardInterface) {
    return (
        <div className="flex gap-m">
            <div className="relative w-[300px] h-[300px]">
                <Image
                    src={`${image}`}
                    alt="test"
                    fill
                    className="rounded"
                />
                <div className="absolute inset-0 bg-gray-400 opacity-40 mix-blend-multiply pointer-events-none" />
            </div>
            <div className="flex flex-col gap-s text-background">
                <div className="text-h5 font-bold tracking-wider">{heading}</div>
                <div className="text-small font-light tracking-wide">{description}</div>
            </div>

        </div >
    )
}