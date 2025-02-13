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
        <div className="flex-col md:flex gap-8">
            <Image
                src={`${image}`}
                alt="test"
                width={700}
                height={700}
                className="rounded"
            />
            <div className="flex flex-col gap-2">
                <div className="text-xl">{heading}</div>
                <div>{description}</div>
            </div>

        </div>
    )
}