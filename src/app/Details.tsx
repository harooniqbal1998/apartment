import { Home, Palette, Trees, MapPin, Shield } from "lucide-react";

export default function VillaAmenities() {
  const amenities = [
    {
      id: 1,
      icon: Home,
      title: "14 Villas & Plots",
      description: "Premium villas and plots available for sale"
    },
    {
      id: 2,
      icon: Palette,
      title: "Custom Design",
      description: "Personalized architectural solutions"
    },
    {
      id: 3,
      icon: Trees,
      title: "Public Parks",
      description: "Green spaces and recreational areas"
    },
    {
      id: 4,
      icon: MapPin,
      title: "City Amenities",
      description: "Close proximity to urban facilities"
    },
    {
      id: 5,
      icon: Shield,
      title: "Security",
      description: "24/7 gated community protection"
    }
  ];

  return (
   <div className="min-h-screen  flex flex-col mx-m gap-xl">
      <div id="contactHeader" className="flex flex-col gap-s">
        <h1 className="font-bold text-background text-5xl">Amenities</h1>
        <p className="text-base">What you need for your home</p>
      </div>

      {/* Amenities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {amenities.map((amenity) => {
          const IconComponent = amenity.icon;
          return (
            <div
              key={amenity.id}
              className="flex flex-col items-center text-center group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray rounded py-8"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-2 border-black rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-black group-hover:border-black transition-all duration-300">
                <IconComponent 
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-black group-hover:text-white transition-colors duration-300" 
                  strokeWidth={1.5}
                />
              </div>
              
              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-black">
                  {amenity.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs">
                  {amenity.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom decoration */}
      
    </div>
  );
}