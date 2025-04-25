export default function Header() {
    return (
        <div className="sticky top-0 z-10 bg-gray1">
            <div className="flex justify-between max-w-4xl md:mx-auto items-center py-m">
                <div className="font-semibold">Warmstay Homes</div>
                <div className="flex gap-l text-primary">
                    <div>About Us</div>
                    <div>Contact</div>
                </div>
            </div>
        </div>
    )
}