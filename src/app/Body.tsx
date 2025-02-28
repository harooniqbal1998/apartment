// import Image from "next/image"

export default function Body() {
    return (
        <div className="flex relative gap-8 bg-cover bg-center bg-no-repeat bg-[url(/interior.jpg)] min-h-screen items-center">
            {/* <div className="max-w-4xl relative h-[700px]">
                <Image
                    alt="/exterior.jpg"
                    src="/exterior.jpg"
                    width={700}
                    height={475}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto",
                        position: "absolute"
                    }}
                />
            </div> */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="flex flex-col gap-8 z-10 text-white max-w-7xl md:mx-auto mx-8 justify-center items-center">
                <div className="lg:text-8xl text-3xl max-w-4xl text-center">
                    Luxury apartments in Kochi
                </div>
                <a className="text-center lg:max-w-xs py-4 lg:px-16 px-8 text-black font-semibold rounded bg-base" href="https://wa.me/91XXXXXXX?text=I'm%20interested%20in%20booking%20the%20villa!">
                    Book a tour
                </a>
            </div>
        </div>
    )
}