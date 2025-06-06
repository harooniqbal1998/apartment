import Link from "next/link"

export default function Header() {
    return (
        <div className="sticky top-0 z-10 bg-gray1">
            <div className="flex justify-between md:mx-auto items-center bg-black text-white">
                <div className="font-semibold py-m px-ml">Warmstay Homes</div>
                <div className="flex gap-l text-primary">
                    <Link href="/#contact" scroll={true} className="hover:underline underline-offset-4 bg-white text-black pl-l py-m pr-ml border border-b-1 border-black">Contact Us</Link>
                    {/* <div>About Us</div> */}
                </div>
            </div>
        </div>
    )
}