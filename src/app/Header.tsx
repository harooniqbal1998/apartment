import Link from "next/link"

export default function Header() {
    return (
        <div className="sticky top-0 z-10 bg-gray1">
            <div className="flex justify-between md:mx-auto items-center bg-black text-white">
                <div className="font-semibold py-m px-ml">Warmstay Homes</div>
                <div className="flex gap-l text-primary items-center">
                    <div className="py-auto hover:underline underline-offset-4 cursor-pointer">About Us</div>
                    <Link href="/#contact" scroll={true} className="hover:underline underline-offset-4 bg-white text-black pl-l py-m pr-ml border border-b-1 border-black">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}