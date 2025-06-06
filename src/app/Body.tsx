// import Image from "next/image"

import { Hammer, HomeIcon, MapPin } from "lucide-react";

import Link from "next/link";

export default function Body() {
  return (
    <div className="flex min-h-screen items-center">
     
       

       
          <div id="heroContent" className="flex flex-col gap-l mx-m">
            <div className="flex flex-col md:gap-s">
              <h1 className="text-heading leading-[120%] font-bold ">
                Find your luxury home in  <span className="inline md:block underline-custom">
                god&apos;s own country
                {/* <div className="strike"></div> */}
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

          {/* <div id="accordionList" className="flex  gap-m flex-grow mr-m">
            

            <div className="accordion">
              <input type="checkbox" id="section1" />
              <label htmlFor="section1">Renowned Architect</label>
              <div className="content">
                <p>
                  Enjoy a private pool, garden, and smart automation features.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="section2" />
              <label htmlFor="section2">Experienced builders</label>
              <div className="content">
                <p>
                  Enjoy a private pool, garden, and smart automation features.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="section3" />
              <label htmlFor="section3">Build your vision</label>
              <div className="content">
                <p>
                  Enjoy a private pool, garden, and smart automation features.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="section4" />
              <label htmlFor="section4">Own your land</label>
              <div className="content">
                <p>
                  Enjoy a private pool, garden, and smart automation features.
                </p>
              </div>
            </div>

          </div> */}
        </div>
     
    
  );
}
