import Link from "next/link"

export default function Header() {
    return (
        <div className="sticky top-0 z-10 bg-gray1">
            <div className="flex justify-between max-w-4xl md:mx-auto items-center py-m px-m">
                <div className="font-semibold">Warmstay Homes</div>
                <div className="flex gap-l text-primary">
                    {/* <div>About Us</div> */}
                    <Link href="/#contact" scroll={true} className="hover:underline underline-offset-4">Contact</Link>
                </div>
            </div>
        </div>
    )
}