import { Phone } from "lucide-react"
import { Mail } from "lucide-react"


export default function Contact() {
    return (
        <div className=" bg-primary min-h-screen flex flex-col items-center justify-center " id="contact">
            <h1 className="font-bold text-background text-h4">Contact Us</h1>
            <p className="text-base text-background mb-l opacity-80">We will reach out to you in 48 hours</p>
            {/* need to add n more colors, hierarchy is not proper */}
            <form action="get" className="flex flex-col gap-m text-background items-grow w-[400px]">
                <label className="flex flex-col gap-s">
                    Name:
                    <input type="text" name="name" className="border border-1 border-gray-500 bg-gray2 rounded px-m py-s text-black" />
                </label>
                <label className="flex flex-col gap-s">
                    Phone:
                    <input type="tel" name="phone" className="border border-1 border-gray-500 rounded px-m py-s bg-gray2 text-black" />
                </label>
                <label className="flex flex-col gap-s">
                    Comments:
                    <textarea name="comments" id="comments" className="border border-1 border-gray-500 rounded px-m py-s bg-gray2 text-black"></textarea>
                </label>
                <input type="submit" value="Submit" className="mx-auto bg-primary px-8 py-4 rounded-lg text-base text-background w-[300px]" />
            </form>
            <div className="flex flex-col gap-m items-center pt-l">
                <div className="text-background opacity-80">Directly find us through</div>
                <div className="flex gap-xl">
                    <div className="flex gap-s items-center">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <p className="text-background">+91 829334823</p>
                        {/* Would be cool to add a map link here */}
                    </div>
                    <div className="flex gap-s items-center">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <p className="text-background">iqbal@gmail.com</p>
                        {/* Link to amenities section */}
                    </div>
                </div>
            </div>

        </div>
    )
}