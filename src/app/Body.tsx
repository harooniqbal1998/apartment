// import Image from "next/image"

import Link from "next/link";

export default function Body() {
  return (
    <div className="flex min-h-screen items-center">
          <div id="heroContent" className="flex flex-col gap-l mx-m">
            <div className="flex flex-col md:gap-s">
              <h1 className="text-heading leading-[120%] font-bold ">
                Find your luxury home in  <span className="inline md:block underline-custom">
                god&apos;s own country
              </span>
              </h1>
             
            </div>
            <div>
              <Link
                href="/#contact"
                className="bg-black text-white px-m py-m hover:rounded-none hover:underline underline-offset-4"
                scroll={true}
                replace={false}
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
     
    
  );
}
