import Image from "next/image"

export default function Body() {
    return (
        <div className="flex gap-8 relative h-[700px]">
            <Image
                alt="/exterior.jpg"
                src="/exterior.jpg"
                width={700}
                height={475}
                sizes="100vw"
                style={{
                    width: "100%",
                    height: "auto",
                }}
            />
            <div className="flex flex-col gap-8">
                <div className="text-8xl">
                    Amazing apartments in Kochi
                </div>
                <div className="w-full text-center p-8 border border-black">
                    Sign up here
                </div>
            </div>
        </div>
    )
}